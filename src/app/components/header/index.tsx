import Image from "next/image";
import logo from "../../../../assets/logo.png"
import { ShoppingCart } from "lucide-react";
import HoverCardHeader from "../hover-card";
import Link from "next/link";


export default function Header() {

  return (
    <header >
      <div className="bg-black w-full h-9 flex items-center justify-center ">
        <h2 className="text-gray-100">FRETE GRÁTIS PARA TODO BRASIL</h2>
      </div>

      <nav className="flex max-h-[30rem] flex-row items-center justify-around h-36 gap-12 bg-green-950 border-0 leading-5">
        <Link href={'/'}>
          <Image src={logo} height={128} width={128} alt=""/>
        </Link>

       
        <div className="items-center justify-center flex gap-12">
        <HoverCardHeader />
        
         <div>
          <Link href={'/cart'} className="text-gray-100 cursor-pointer">
            <ShoppingCart size={32}/>
          </Link>
        </div>
          
        </div>
      </nav>
    </header>
  )
}