import '/public/css/bootstrap.min.css';
import '/styles/globals.css' 
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>

}
