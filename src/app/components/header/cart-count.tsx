'use client'

import { ShoppingCart } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

export function CartCount() {
  const { cartCount } = useShoppingCart()

  return (
    <div className="flex">
      <ShoppingCart size={32} className="relative" />
      {cartCount! > 0 && <span className="absolute w-6 h-6 text-green-900 bg-green-50 font-bold text-sm rounded-full flex items-center justify-center -translate-y-4 translate-x-5">{cartCount}</span>}
    </div>
  )
}