import Stripe from "stripe"
import stripe from "./stripe"

export async function getProducts() {
    const products = await stripe.products.list({
      limit: 4,
      expand: ["data.default_price"],
    })

    return products.data.map((products: Stripe.Product) => {
      return {
        id: products.id.toString(),
        name: products.name,
        imageUrl: products.images[0],
        currency: (products.default_price as Stripe.Price).currency ?? 'BRL',
        price: (products.default_price as Stripe.Price).unit_amount_decimal ?? "0",
        price_id: (products.default_price as Stripe.Price).id,
      }
    })
}

export async function getProductById(id: string) {
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"]
  })

  return {
    id: product.id.toString(),
    name: product.name,
    imageUrl: product.images[0],
    description: product.description as string,
    price: (product.default_price as Stripe.Price).unit_amount ?? "0",
    defaultPriceId: (product.default_price as Stripe.Price).id ?? "0",
    currency: (product.default_price as Stripe.Price).currency ?? 'BRL',
  }
}