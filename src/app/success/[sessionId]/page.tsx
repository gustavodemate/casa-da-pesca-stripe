'use client'

import { Check, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  params: {
    sessionId: string;
  }
}

export default function Success({ params }: SuccessProps) {

  const { cartCount, clearCart } = useShoppingCart()

  if (!params) {
    window.location.href = process.env.NEXT_URL as string
  }

  if (cartCount! > 0) {
    clearCart()
  }
  
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <div className="flex flex-row justify-center items-center">
      <Check size={64} color="#00875f"/>
        <h1 className="text-6xl text-green-700">Compra efetuada!</h1>
      </div>      
      <section className="text-2xl max-w-[560px] text-center mt-8 leading-4">
        <p>Obrigado pela confiança.</p>
        
      </section>

        <Link href="/" className="mt-4 text-xl text-green-600 no-underline font-medium hover:text-green-400 flex gap-3 items-center">
           <MoveLeft /> 
           Voltar ao catálogo
        </Link>      
    </div>
  )
}