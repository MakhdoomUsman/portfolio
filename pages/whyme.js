import React from "react";

const whyme = () => {
  return (
    <div className=" flex h-screen">
      <div className="relative bg-black custom-shape2 w-[50%]  flex justify-center items-center">
        <img src="/portfolio/image2.svg" alt="" className="" />
      </div>
      <div className="bg-white  w-[50%] flex items-center">
        <div className="w-[380px] mx-[50px]">
          <p className="font-medium text-[#FF0000] text-xl leading-5 tracking-widest my-3">
            About Me
          </p>
          <h1 className=" text-2xl leading-9 font-bold my-1">Why Hire Me!</h1>
          <div className="flex">
            <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
            <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
            <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
          </div>

          <h3 className="font-medium text-base text-[#333232] uppercase my-4">
            Sr.Full Stack Developer
          </h3>
          <span className="font-medium text-base text-[#333232]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
            ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut
            quis congue purus volutpat posuere lorem.
          </span>
          {/* <button className="mt-5 bg-black text-[#FF0000] font-bold px-3 py-2 text-lg rounded-xl">
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default whyme;
