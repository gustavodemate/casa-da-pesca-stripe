import Gallery from "@/app/product/components/gallery";
import { ProductDatails } from "../components/product-details";
import { getProductById } from "@/app/lib/fetch-stripe";

export default async function Product({ params }: { params: { id: string } }) {
  const productId = params.id
  const product = await getProductById(productId)
  
  return (
    <div className=" grid grid-cols-1 max-w-[1180px] mx-auto my-0 gap-8 items-stretch mt-10 p-6 xl:grid-cols-2">
      <div className="h-[calc(656px - 0.5rem)] w-[736] flex gap-8">
        <Gallery product={product} />
      </div>

      <ProductDatails product={product}/>

    </div> 
  )
}