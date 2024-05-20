import '/public/css/bootstrap.min.css'; // 确保路径正确
 // 确保路径正确
import "/styles/globals.css";
// import '/public/css/animate.css'; // 确保路径正确
// import '/public/css/magnific-popup.css'; // 确保路径正确
// import '/public/css/owl.carousel.css'; // 确保路径正确

// import 'bootstrap/dist/css/bootstrap.css'
import '/styles/cart/cart.css'
import { CartProvider } from '@/hooks/use_cart'



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
}

