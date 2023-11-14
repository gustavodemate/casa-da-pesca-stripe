'use client'

import { Button } from "@/app/components/button";
import formattedPrice from "@/app/components/formattedPrice";
import { Price } from "@/app/product/components/product-details/price";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export function CartList() {
  const { cartDetails, redirectToCheckout, formattedTotalPrice, removeItem, cartCount } = useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  if (cartCount == 0) return 'seu carrinho está vazio!'

  async function checkout() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await fetch('/api/checkout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });
    const { checkoutUrl } = await response.json()
    console.log(checkoutUrl)
    window.location.href = checkoutUrl
    
    }catch (error) {
      setIsCreatingCheckoutSession(false) 
    }
    
  }

return (
    <div className="flex flex-col">
      {cartDetails && Object.keys(cartDetails).map((key) => (
      <div className="" key={cartDetails[key].id}>
        <li className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              src={cartDetails[key].image as string}
              alt={cartDetails[key].name}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/product/${cartDetails[key].id}`} className="font-medium">
                      {cartDetails[key].name}
                    </Link>
                  </h3>
                </div>
                <div className="mt-1 text-sm font-medium flex flex-row gap-1">
                  <Price 
                    price={cartDetails[key].price * cartDetails[key].quantity}
                  />
                  <p>({cartDetails[key].quantity})</p>
                </div>
                <p className="mt-1 text-sm font-medium">
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${cartCount}`} className="sr-only">
                  {cartDetails[key].name}
                </label>
                <div className="absolute right-0 top-0">
                  <button onClick={() => removeItem(cartDetails[key].id)}>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </li>
       
      </div>
      ))}
      <Button className="w-96 mt-8"
      onClick={checkout}
      >
        realizar pagamento
      </Button>
    </div>
  );
};