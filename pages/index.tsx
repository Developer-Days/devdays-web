import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import art from "../public/assets/art.png"

export default function Home() {
  return (
    <div className="w-full container flex flex-col">
      <Head>
        <title>Developer Days</title>
        <meta name="description" content="Developer days is coming back!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex lg:grid h-full flex-col w-full grid-cols-2">
          <div className="flex gap-4 justify-center flex-col">
            <h1 className=" font-League-Spartan leading-[73.6px]">
              We are coming back!
            </h1>
            <h5 className="text-gray-700 font-almarai">
              Stay tuned for New Tracks and Challenges, with a pinch of surprise
              for the whole developer community Stay tuned for New Tracks and
              Challenges, with a pinch of surprise for the whole developer
              community Stay tuned for New Tracks and Challenges
            </h5>
            <div className="mt-10 items-center flex gap-5">
              <h5 className="font-League-Spartan">
                Want to have a look at Developer Days 1.0?
              </h5>
              <button className="px-4 hover:brightness-105 rounded-xl py-2 font-League-Spartan text-2xl text-white bg-[#1EB7D0]">
                Have a look
              </button>
            </div>
          </div>
          <div className="flex w-full items-center ml-6 mb-6 justify-end">
            <div className="flex max-h-[531px]">
              <Image src={art} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
