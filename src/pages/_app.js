import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from 'components/Navbar';
import Contact from 'components/Contact';

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Contact/>
  </>
}
