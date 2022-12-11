import Head from "next/head"
import Image from "next/image"
import art from "../public/assets/art.svg"

export default function Home() {
  return (
    <div className="w-full container flex flex-col">
      <Head>
        <meta
      name="description"
      content="Developer Days is a 5-week long event. It consists of three tracks that are Web Development, Android Development, and UI/UX Design. The event consists of various sessions and challenges. Various swags and prizes will be awarded to the winners and participants"
    />
    <meta name="keywords" content="Developer Days, DevDays, bootcamp, hackathon, DeveloperDays, Developer Days 2021"/>
    <title>Developer Days</title>
        <meta name="description" content="Developer days is coming back!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex lg:grid h-full flex-col w-full grid-cols-2">
          <div className="flex gap-4 justify-center flex-col">
            <h1 className=" font-League-Spartan leading-[73.6px]">
              We are back!
            </h1>
            <h5 className="text-gray-700 font-almarai">
            The overpowering series of Developer Days is coming back soon!
New Tracks and New Challenges, along with a pinch of surprise for the whole developer community, so experts and newbies stay tuned.................
            </h5>
            <div className="mt-10 items-center flex gap-5">
              <h5 className="font-League-Spartan">
                Want to have a look at Developer Days 1.0?
              </h5>
              <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://2021.developerdays.tech/"
            >
              <button className="px-4 hover:brightness-105 rounded-xl py-2 font-League-Spartan text-2xl text-white bg-[#1EB7D0]">
                Have a look
              </button>
              </a>
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <div className="flex max-h-[531px]">
              <Image src={art} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
