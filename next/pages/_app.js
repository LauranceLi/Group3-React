import '/public/css/bootstrap.min.css';
import '/styles/globals.css' 
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'
import { UseCouponProvider } from '@/hooks/use_coupon'
import { FormProvider } from '@/context/formContext'
import { AddressProvider } from '@/context/AddressContext'



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CartProvider>
      <UseCouponProvider>
        <FormProvider>
          <AddressProvider>
            {getLayout(<Component {...pageProps} />)}
          </AddressProvider>
        </FormProvider>
      </UseCouponProvider>
    </CartProvider>
  )

}
