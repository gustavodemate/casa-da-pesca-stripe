import stripe from "@/app/lib/stripe";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "use-shopping-cart/core";

import { validateCartItems } from "use-shopping-cart/utilities"

export async function POST(req: NextRequest) {
  const cartDetails  = await req.json()
 
  const stripeInventory = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = stripeInventory.data.map((product: Stripe.Product): Product => {
    return {
      id: product.id.toString(),
      name: product.name,
      imageUrl: product.images[0],
      currency: (product.default_price as Stripe.Price)?.currency ?? 'BRL',
      price: (product.default_price as Stripe.Price)?.unit_amount ?? 0,
      price_id: (product.default_price as Stripe.Price).id
    }
  })

  const lineItems = validateCartItems(products, cartDetails)

  console.log(lineItems)

  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success/{CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/cart',
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
})


  return NextResponse.json({
    checkoutUrl: session.url,
    status: 200,
  })
}