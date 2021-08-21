import "../app/UI/Global/GameContainer/styles.scss";
import "../app/UI/Global/styles/global.scss";
import "../app/UI/Home/ThoughtReader/ThoughtReader.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
