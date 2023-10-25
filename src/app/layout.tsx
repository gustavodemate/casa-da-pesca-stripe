
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from './components/header'
import CartProviderClient from './providers/cart-provider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500', '700']
 })

export const metadata: Metadata = {
  title: 'Casa da pesca',
  description: 'Casa da pesca e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartProviderClient>
          <Header />
          {children}
        </CartProviderClient>
      </body>
    </html>
  )
}
