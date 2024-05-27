import '/public/css/bootstrap.min.css';
import '/styles/globals.css' 
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'

import ToasterComponent from '../components/toaster';




export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CartProvider>
      <ToasterComponent />
      {getLayout(<Component {...pageProps} />)}
    </CartProvider>
  );
}
