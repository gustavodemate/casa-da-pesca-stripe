'use client'

import { useShoppingCart } from "use-shopping-cart";

export function CartSummary() {
  const { cartCount, formattedTotalPrice } = useShoppingCart()
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 px-4 py-6 shadow-md  bg-green-900 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-white">
        Resumo do Pedido
      </h2>

      <section className="mt-6 space-y-4  text-white">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">FRETE:</p>
          <p className="text-base font-medium">R$ 0,00</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600 ">
          <p className="flex items-center text-sm">QUANTIDADE DE PRODUTOS:</p>
          <p className="text-sm font-medium">{cartCount}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600  ">
        <p className="text-sm">TOTAL DA COMPRA:</p>
        <p className="text-sm font-medium ">{formattedTotalPrice}</p>
          
          
        </div>
      </section>

    </section>
  )
  
}