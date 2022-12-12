import Image from "next/image"
import React from "react"
import {
  TbBrandDiscord,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandYoutube,
} from "react-icons/tb"
import logo from "../../../public/assets/logo.svg"

const Header = () => {
  return (
    <div className="top-0 w-screen px-4 py-7 justify-center bg-[#f5f5f5] flex">
      <div className="w-full flex container justify-between">
        <div className="">
          <div className="flex">
            <Image src={logo} alt={"developer days 2.0"} style={{'height':'70px', 'width':'auto'}}/>
          </div>
        </div>
        <div className="sm:flex md:flex hidden  items-center flex-col gap-2">
          <div className="text-lg font-semibold text-gray-800 font-inter italic">
            keep yourself updated
          </div>
          <div className="flex text-gray-700 delay-300 text-3xl gap-5">
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://twitter.com/developerdays21"
            >
              <TbBrandTwitter className="hover:text-[#1d9bf0] cursor-pointer" />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://instagram.com/developerdays21"
            >
              <TbBrandInstagram className="hover:text-[#f3433f] cursor-pointer" />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://discord.gg/yt9vBKqtVg"
            >
              <TbBrandDiscord className="hover:text-[#5562ea] cursor-pointer" />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.linkedin.com/company/developerdays"
            >
              <TbBrandLinkedin className="hover:text-[#1d9bf0] cursor-pointer" />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.youtube.com/channel/UCBjYrL6mJ_K6DpA2qUGUDRw"
            >
              <TbBrandYoutube className="hover:text-[#ff0000] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
