import React, { useState } from "react";
import Footer from "../components/Footer";

const portfolio = () => {
  const [allprojects, setAllprojects] = useState(true);
  const num = 3;
  const projects = [
    {
      num: "01",
      title: "UX-Designer",
      body: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    },
    {
      num: "02",
      title: "UX-Designer",
      body: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    },
    {
      num: "03",
      title: "UX-Designer",
      body: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    },
    {
      num: "04",
      title: "UX-Designer",
      body: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    },
    {
      num: "05",
      title: "UX-Designer",
      body: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    },
  ];
  {
  }
  return (
    <>
      <div className="bg-black p-20">
        <div className="flex justify-center">
          <div className="">
            <h1 className=" text-3xl leading-10 font-bold text-white my-1">
              Projects
            </h1>
            <div className="flex text-left">
              <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
              <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
              <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
            </div>
          </div>
        </div>
        {projects.map((data, index) => {
          return (
            <>
              {allprojects ? (
                index < num && (
                  <div className="flex">
                    <div className="w-[40%] py-10 float-right">
                      <div className="bg-white rounded-2xl p-10">
                        <h1 className=" text-xl leading-[37px] font-bold">
                          {data?.title}
                        </h1>
                        <p className="font-normal text-base text-[#333232] mt-5">
                          {data?.body}
                        </p>
                      </div>
                    </div>
                    <div className=" w-[20%] flex justify-center items-center relative">
                      <div className="bg-white border-2 h-20 w-20 rounded-full flex justify-center items-center">
                        <p className="text-3xl font-extrabold">{data?.num}</p>
                      </div>
                      <div className="h-[85%] absolute top-40">
                        <div className="w-[2px] h-[100%] bg-white border-none"></div>
                      </div>
                    </div>{" "}
                    <div className="w-[40%] float-left"></div>
                  </div>
                )
              ) : (
                <div className="flex">
                  <div className="w-[40%] py-10 float-right">
                    <div className="bg-white rounded-2xl p-10">
                      <h1 className=" text-xl leading-[37px] font-bold">
                        {data?.title}
                      </h1>
                      <p className="font-normal text-base text-[#333232] mt-5">
                        {data?.body}
                      </p>
                    </div>
                  </div>
                  <div className=" w-[20%] flex justify-center items-center relative">
                    <div className="bg-white border-2 h-20 w-20 rounded-full flex justify-center items-center">
                      <p className="text-3xl font-extrabold">{data?.num}</p>
                    </div>
                    <div className="h-[85%] absolute top-40">
                      <div className="w-[2px] h-[100%] bg-white border-none"></div>
                    </div>
                  </div>{" "}
                  <div className="w-[40%] float-left"></div>
                </div>
              )}
            </>
          );
        })}
        <div className="flex justify-center my-24">
          <button
            className="bg-white px-3 py-2 text-[#FF0000] font-bold text-lg   rounded-xl"
            onClick={() => {
              setAllprojects(!allprojects);
            }}
          >
            {allprojects ? "Show More" : "Show Less"}
          </button>
        </div>

        <div className="bg-white rounded-3xl p-20 flex">
          <div className=" w-[70%]">
            <h1 className=" text-[40px] leading-[60px]  font-bold">
              Get In Touch
            </h1>
            <div className="flex text-left">
              <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
              <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
              <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
            </div>
            <p className="font-normal text-base text-[#333232] mt-5">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
          </div>
          <div className="flex justify-center items-center w-[30%]">
            <button className="bg-black px-4 py-3 text-[#FF0000] font-bold text-2xl rounded-xl">
              Say Hello
            </button>
          </div>
        </div>
      </div>
      <div className="pb-2 bg-black">
        <Footer />
      </div>
    </>
  );
};

export default portfolio;
