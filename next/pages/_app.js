import '/public/css/bootstrap.min.css';
import '/styles/globals.css' 
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
