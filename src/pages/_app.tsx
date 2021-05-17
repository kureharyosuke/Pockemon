import React from 'react'
import { AppProps} from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)
// appWithTranslationHOC는 추가 일차적 책임이있다 I18nextProvider.