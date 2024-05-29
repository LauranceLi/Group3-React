// import '/public/css/bootstrap.min.css'
import '/styles/globals.css'

import "@/styles/layout/slider.css";
import React from 'react'
import product from '/styles/product/product.css'

import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'
import { useGroupOrder } from '@/hooks/use-group-order'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <useGroupOrder><CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider></useGroupOrder>
}
