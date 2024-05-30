import '/styles/globals.css'

import '@/styles/layout/slider.css'
import React from 'react'
import product from '/styles/product/product.css'
import { Toaster } from 'react-hot-toast'

import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'
import { OrderProvider } from '@/hooks/use-order'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Toaster />
      <OrderProvider>
        <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
      </OrderProvider>
    </>
  )
}
