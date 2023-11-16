'use client'

import { ShoppingCart } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

export function CartCount() {
  const { cartCount } = useShoppingCart()

  return (
    <div>
      {cartCount! <= 0 ?  <ShoppingCart /> : (
        cartCount
      )}
    </div>
  )
}