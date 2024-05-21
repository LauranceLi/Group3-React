import '/public/css/bootstrap.min.css';
import '/styles/globals.css' // 确保路
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicBrowserRouter = dynamic(
  () => import('../components/BrowserRouterWrapper'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <DynamicBrowserRouter>
      <Component {...pageProps} />
    </DynamicBrowserRouter>
  );
}

export default MyApp;
