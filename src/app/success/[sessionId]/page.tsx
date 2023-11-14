import { SearchSuccessPage } from "@/app/lib/fetch-stripe";

import { Check, MoveLeft } from "lucide-react";
import Link from "next/link";

interface SuccessProps {
  params: {
    sessionId: string;
  }
}

export default async function Success({ params }: SuccessProps) {

  

  const session = await SearchSuccessPage(params.sessionId)

  const customerName = session.customer_details?.name as string

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <div className="flex flex-row justify-center items-center">
      <Check size={64} color="#00875f"/>
        <h1 className="text-6xl text-green-700">Compra efetuada!</h1>
      </div>      
      <section className="text-2xl max-w-[560px] text-center mt-8 leading-4">
        <p>Obrigado pela confiança <strong className="text-2xl text-green-600">{customerName}.</strong> </p>
        
      </section>
      
        
        <Link href="/" className="mt-4 text-xl text-green-600 no-underline font-medium hover:text-green-400 flex gap-3 items-center">
           <MoveLeft /> 
           Voltar ao catálogo
        </Link>      
    </div>
  )
}