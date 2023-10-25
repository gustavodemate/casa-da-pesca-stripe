'use client'

import formattedPrice from "@/app/components/formattedPrice";

interface PriceProps {
  price: number
}

export function Price({ price }: PriceProps) {
  return (
    <span >{formattedPrice({
      value: price as number,
      currency: "BRL"
     })}
     </span>
  )
}