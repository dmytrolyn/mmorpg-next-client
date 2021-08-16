import 'styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import type { AppProps } from 'next/app'
import Head from '../meta/Head';
import { ThemeProvider } from "styled-components";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const theme = {
  colors: {
    primary: '#0d0c0a'
  } 
}

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
export default MyApp
