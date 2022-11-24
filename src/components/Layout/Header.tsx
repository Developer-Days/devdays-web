import React from "react"
import {
  TbBrandDiscord,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
} from "react-icons/tb"

const Header = () => {
  return (
    <div className="top-0 w-screen px-4 py-7 justify-center bg-[#f5f5f5] flex">
      <div className="w-full flex container justify-between">
        <div className=""></div>
        <div className="flex items-center flex-col gap-2">
          <div className="text-md font-semibold text-gray-800 font-inter italic">
            keep yourself updated
          </div>
          <div className="flex text-gray-700 text-3xl gap-5">
            <TbBrandTwitter className="hover:text-black cursor-pointer" />
            <TbBrandInstagram className="hover:text-black cursor-pointer" />
            <TbBrandDiscord className="hover:text-black cursor-pointer" />
            <TbBrandLinkedin className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
