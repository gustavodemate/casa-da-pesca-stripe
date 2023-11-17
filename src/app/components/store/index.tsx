"use client"
import Image from 'next/image'
import Link from 'next/link'


import { Button } from '../button'

import { useShoppingCart } from 'use-shopping-cart'

import formattedPrice from '../formattedPrice'
import { Product } from '@/app/lib/types'


export default function Store({ products }: Product) {
  
  const { addItem } = useShoppingCart()
 
  
  return (
    <div className="flex w-[1200px] flex-col bg-gray-50 p-12 h-full xl:mt-6">
      <h3 className="xl:mb-12 font-bold text-3xl">Produtos</h3>
      <section className='flex flex-col items-center justify-center gap-8 xl:grid grid-cols-4'>
          {products.map((product) => {
            return (
              <div key={product.id} className='max-h-[30rem] flex flex-col boder gap-[0.2rem] cursor-pointer'>
              <div className='h-72'>
                <Link href={`/product/${product.id}`}>
                <Image src={product.imageUrl} height={300} width={300} alt={product.name} className='h-full object-cover'/>
                </Link>
              </div>
              
              <div className='text-base text-gray-700 max-h-6 overflow-hidden text-ellipsis'>{product.name}</div>
              
              <strong className='text-2xl text-green-600'>
                {formattedPrice({
                  value: product.price as number,
                  currency: 'BRL',
                })}
              </strong>
              
              
              <Button onClick={() => addItem({
                id: product.id,
                name: product.name,
                image: product.imageUrl,
                currency: product.currency,
                price: product.price as number,
                priceId: product.price_id
              })}>
                Adicionar ao carrinho
              </Button>
              
            </div>
            )
          })} 
      </section>
    </div>
  )
}