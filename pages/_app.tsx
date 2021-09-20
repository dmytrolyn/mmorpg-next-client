import 'styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { ThemeProvider } from "styled-components"
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from '../meta/Head'
import useStore from 'store'

SwiperCore.use([Navigation, Pagination, Autoplay])

const theme = {
  colors: {
    primary: '#0d0c0a'
  } 
}

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.storeState)

  return <>
    <Head />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  </>
}
export default MyApp
