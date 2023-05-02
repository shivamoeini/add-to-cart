import '@/styles/globals.css'
import { Provider } from 'react-redux';  
import Navbar from '@/Componnts/Navbar'
import Footer  from "@/Componnts/Footer"
import store from '../redux/store'
export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <div className="wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Provider>
  )
}
