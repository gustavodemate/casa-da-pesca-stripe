import stripe from "@/app/lib/stripe";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  params: {
    sessionId: string;
  }
}

export default async function Success({ params }: SuccessProps) {

  const session = await stripe.checkout.sessions.retrieve(params.sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details?.name as string


  return (
    <div className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <div className="flex flex-row justify-center items-center">
      <Check size={48} color="#00875f"/>
        <h1 className="text-2xl text-green-700">Compra efetuada!</h1>
      </div>      
      <section className="text-xl max-w-[560px] text-center mt-8 leading-4">
        <p>Obrigado pela confiança <strong className="text-2xl text-green-800">{customerName}</strong> </p>
        
      </section>

      <Link href="/" className="mt-20 block text-xl text-green-500 no-underline font-medium hover:text-green-300">Voltar ao catálogo</Link>
      
    </div>
  )
}