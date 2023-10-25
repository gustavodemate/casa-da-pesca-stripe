import { CartList } from "./components/CartList";
import { CartSummary } from "./components/CartSummary";


export default async function Cart() {
 
  return (
    <div>
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meu carrinho
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section className="lg:col-span-7">
            <CartList />
          </section>
          <CartSummary />
        </div>
      </main>
    </div>
  )
}