import { ProductById } from "@/app/lib/types";
import { Price } from "./price";


export function ProductDatails({ product }: ProductById) {

    return (
      <div className="flex flex-col">
      <h2 className="text-2xl text-gray-700">{product.name}</h2>
  
      <div className="text-2xl text-gray-700 mt-4">
       <Price price={product.price as number}/>
       <p>à vista</p>
      </div>
      
      <article className="leading-10 mt-4"> 
        {product.description}
      </article>
    </div>
    )      
  }
 
  
