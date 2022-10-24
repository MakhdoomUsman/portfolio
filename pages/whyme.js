import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const whyme = () => {
  return (
    <>
      <Header color="black" />
      <div className=" md:flex h-screen">
        <div className="relative bg-black custom-shape2 md:w-[50%] w-full md:h-full h-[60%] flex items-center ">
          <img src="/portfolio/image2.svg" alt="image" className="md:mx-28 mt-44 pl-10" />
        </div>
        <div className="bg-white  md:w-[50%] md:h-full h-[40%] flex md:items-center md:justify-start justify-end">
          <div className="w-[380px] mx-[50px]">
            <p className="font-medium text-[#FF0000] lg:text-xl text-base leading-5 tracking-widest lg:my-3 my-0">
              About Me
            </p>

            <h1 className=" lg:text-2xl text-xl font-bold my-1">Why Hire Me!</h1>
            <div className="flex">
              <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
              <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
              <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
            </div>

            <h3 className="font-medium lg:text-base text-sm text-[#333232] uppercase gl:my-4 my-1">
              Sr.Full Stack Developer
            </h3>
            <span className="font-medium lg:text-base text-sm text-[#333232]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem.
            </span>
            {/* <button className="mt-5 bg-black text-[#FF0000] font-bold px-3 py-2 text-lg rounded-xl">
            Hire Me
          </button> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default whyme;
