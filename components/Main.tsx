import React from "react";

const Main = () => {
  return (
    <div className="relative text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
      <h1 className=" font-League-Spartan text-gray-800 text-6xl sm:text-[80px]">We are back!</h1>
      <h5 className="text-gray-700 font-almarai text-xl">
        The overpowering series of Developer Days is coming back soon! New
        Tracks and New Challenges, along with a pinch of surprise for the whole
        developer community, so experts and newbies stay tuned.................
      </h5>
      <div className="mt-10  flex flex-col item-start gap-5">
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
  );
};

export default Main;
