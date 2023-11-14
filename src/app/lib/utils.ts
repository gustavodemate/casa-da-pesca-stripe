"use client"

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useShoppingCart } from 'use-shopping-cart'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

