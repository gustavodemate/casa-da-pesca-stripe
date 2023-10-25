
import Image from "next/image";
import logo from "../../../../assets/logo.png"
import {  SearchIcon, ShoppingCart, UserCircle } from "lucide-react";
import HoverCardHeader from "../hover-card";
import Link from "next/link";
import { CartSummary } from "@/app/cart/components/CartSummary";


export function Header() {
  return (
    <header>
      <div className="bg-black w-full h-9 flex items-center justify-center ">
        <h2 className="text-gray-100">FRETE GRÁTIS PARA TODO BRASIL</h2>
      </div>

      <nav className="flex flex-row items-center justify-center h-36 gap-12 bg-green-950 border-0 leading-5">
        <Link href={'/'}>
          <Image src={logo} height={128} width={128} alt=""/>
        </Link>
        <form action="" className="flex gap-1 items-center justify-end w-128">
        <input type="text" placeholder="Digite o que você procura" className="bg-white text-gray-600 outline-none text-xs rounded-2xl h-11 w-full relative p-4 placeholder:text-gray-600"/>
        <button className="absolute text-gray-600 me-3">
          <SearchIcon />
        </button>
        </form>

        <HoverCardHeader />
        
          <div className="text-gray-100 cursor-pointer">
            <Link href={'/cart'}>
              <ShoppingCart />
            </Link>
          </div>
      </nav>
    </header>
  )
}