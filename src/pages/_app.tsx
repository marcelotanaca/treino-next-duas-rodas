import Cabecalho from "../Components/Cabecalho"
import Rodape from "../Components/Rodape"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Cabecalho />
        <Component {...pageProps} />
      </main>
      <Rodape />
    </div>
  )
}

export default MyApp
