import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Almarai, League_Spartan } from "@next/font/google"

const almarai = Almarai({
  weight: "400",
  style: "normal",
  subsets: ["arabic"],
  variable: "--font-almarai",
})

const spartan = League_Spartan({
  weight: "500",
  style: "normal",
  variable: "--font-spartan",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${almarai.variable} ${spartan.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
