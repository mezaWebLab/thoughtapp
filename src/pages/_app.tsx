import "../app/UI/Global/GameContainer/styles.scss";
import "../app/UI/Global/styles/global.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
