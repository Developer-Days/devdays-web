import React, { ReactNode } from "react"
import { useRouter } from "next/router"
import { Almarai, League_Spartan } from "@next/font/google"
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

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <div
      className={`${almarai.variable} ${spartan.variable} w-screen h-screen overflow-hidden`}
    >
      <Header />
      <div className="flex overflow-auto h-[100%] w-full">
        <main className="h-full w-full flex pt-32 flex-col overflow-y-auto overflow-x-hidden items-center">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
