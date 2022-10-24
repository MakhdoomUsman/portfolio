import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = () => {
  const service = [
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
    {
      log: "/service 1.png",
      title: "Services",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui ullamcorper ut quis congue purus volutpat posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem",
    },
  ];
  return (
    <>
      <Header />
      <div className="bg-black p-20">
        <div className="flex justify-center">
          <div className="">
            <h1 className=" text-2xl leading-9 font-bold text-white my-1">
              Services
            </h1>
            <div className="flex text-left">
              <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
              <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
              <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5 my-5">
          {service?.map((data, index) => {
            return (
              <div className="bg-white rounded-xl md:p-7 sm:p-3 p-5">
                <img
                  src={data.log}
                  alt=""
                  className="bg-black p-4 rounded-3xl rounded-br-none"
                />
                <h1 className=" text-2xl leading-9 my-3 font-bold">
                  {data.title}
                </h1>
                <span className="font-normal text-base text-[#333232]">
                  {data.body}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default services;
