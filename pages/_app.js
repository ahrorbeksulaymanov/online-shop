import '../styles/globals.css'
import HeaderForShop from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "../components/footer";
import { store } from "../redux/store"
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Provider store={store}>
      <HeaderForShop />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
  )
}

export default MyApp
