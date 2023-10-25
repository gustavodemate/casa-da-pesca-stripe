"use client"

import { CartProvider } from "use-shopping-cart"

interface CartProviderProps {
  children: React.ReactNode
}

const stripeKey = process.env.STRIPE_SECRET_KEY as string

export default function CartProviderClient({ children }: CartProviderProps) {
  return (
    <CartProvider 
      shouldPersist={true}
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
    >
      {children}
    </CartProvider>
  )
} 