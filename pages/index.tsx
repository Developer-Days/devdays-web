import Head from "next/head";
import Image from "next/image";
import art from "../public/assets/art.svg";
import Main from "../components/Main";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Developer Days is a 5-week long event. It consists of three tracks that are Web Development, Android Development, and UI/UX Design. The event consists of various sessions and challenges. Various swags and prizes will be awarded to the winners and participants"
        />
        <meta
          name="keywords"
          content="Developer Days, DevDays, bootcamp, hackathon, DeveloperDays, Developer Days 2021"
        />
        <title>Developer Days</title>
        <meta name="description" content="Developer days is coming back!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full container p-5 sm:p-0 relative">
        <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-3xl mx-auto  mb-6">
          <Main />
          <div className="max-w-lg">
            <Image className="" src={art} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
