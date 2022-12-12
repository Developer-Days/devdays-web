import React, { ReactNode } from "react"
import { useRouter } from "next/router"
import { Almarai, Inter, League_Spartan } from "@next/font/google"
import Header from "./Header"
import Footer from "./Footer"

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
  subsets: ["latin"],
})

const inter = Inter({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-inter",
})

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <div
      className={`${almarai.variable} ${inter.variable} ${spartan.variable} w-screen h-screen sm:overflow-hidden overflow-auto`}
    >
      <Header />
      <div className="flex overflow-auto w-full">
        <main className="h-full w-full flex flex-col overflow-y-auto overflow-x-hidden items-center">
          {children}
        </main>
      </div>
      <div className="visible sm:invisible">
      <Footer />
      </div>
     
    </div>
  )
}

export default Layout
