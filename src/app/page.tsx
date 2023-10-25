import Image from "next/image";
import capa from "../../assets/capa.jpg"
import { BadgeCheck, CircleDollarSign, Truck } from "lucide-react";
import Store from "./components/store";
import { getProducts } from "./lib/fetch-stripe";
import Error from "./error";

export default async function Home() {
  const products = await getProducts()

  if (!products) return <Error />

  return (
    <div className="flex items-center justify-center mt-6 flex-col bg-gray-100">
      <Image src={capa} width={1600} height={1024} alt="" />
      <section className="flex justify-center items-center w-full gap-52">
        <div className="flex items-center justify-center leading-4 gap-2 p-4">
          <Truck size={32} color="#166534"/>
          <strong className="text-green-800 text-lg">Frete gratis</strong>
        </div>

        <div className="flex items-center justify-center w-64 leading-4 gap-2">
          <BadgeCheck size={32} color="#166534"/>
          <strong className="text-green-800 text-lg">Compra segura</strong>
        </div>

        <div className="flex border-green-400 items-center justify-center w-64 gap-2 leading-4">
          <CircleDollarSign size={32} color="#166534"/>
          <strong className="text-green-800 text-lg">Desconto á vista</strong>
        </div>
      </section>

      <Store products={products}/>
    </div>
  )
}
  

