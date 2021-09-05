import "../app/UI/Global/GameContainer/styles.scss";
import "../app/UI/Global/styles/normalize.scss";
import "../app/UI/Global/styles/global.scss";
import "../app/UI/Thought/ThoughtReader/ThoughtReader.scss";
import "../pages/thought/styles.scss";
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import GameContainer from "../app/UI/Global/GameContainer/GameContainer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div id="app">
      <GameContainer onThoughtClick={(thoughtData: any) => router.push(`/thought?id=${ thoughtData.id }&hex=${ thoughtData.hex }`)} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp
