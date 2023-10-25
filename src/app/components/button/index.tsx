import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className= {cn(
      'transition-all bg-green-700 text-gray-100 h-10 w-full rounded flex items-center justify-center mt-2 font-bold cursor-pointer hover:bg-green-600',
      className,
    )}
    {...props}
  >
    {children}
  </button>
  )
}