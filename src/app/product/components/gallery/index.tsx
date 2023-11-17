
import { Product, ProductById } from '@/app/lib/types';

import Image from "next/image";



export default function Gallery({ product }: ProductById) {

  return (
    <div className="flex flex-col-reverse">
      
      <div className="w-full xl:h-[550px]">
        <Image
          priority
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={300}
          className="border-2 max-h-full border-gray-200 object-cover object-center sm:rounded-lg"
        />
      </div>
    </div>
  )
}