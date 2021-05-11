import '../styles/global.css'
import { Menu } from "../components/Menu";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
