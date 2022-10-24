import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
      <Header />
      <div className="bg-black md:p-20 sm:p-7 p-5">
        <div className="flex justify-center">
          <div className="mt-10">
            <h1 className=" text-3xl leading-10 font-bold text-white my-1">
              Projects
            </h1>
            <div className="flex text-left ">
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
                    {/* <div className="xs:hidden block"> */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-[45%] lg:py-10 py-5 xl:pl-20 lg:pl-5 px-1">
                          <div className="bg-white rounded-2xl xl:p-10 lg:p-7 md:p-5 p-2">
                            <h1 className=" md:text-xl text-base lg:leading-[37px] leading-7 md:font-bold font-medium">
                              {data?.title}
                            </h1>
                            <p className="font-normal md:text-base text-sm text-[#333232] lg:mt-5 md:mt-3 mt-1">
                              {data?.body}
                            </p>
                          </div>
                        </div>
                        <div className=" w-[10%] flex justify-center items-center relative">
                          <div className="bg-white border-2 xl:h-24 lg:h-20 sm:h-12 h-6 xl:w-24 lg:w-20 sm:w-12 w-6 rounded-full flex justify-center items-center">
                            <p className="lg:text-3xl sm:text-xl text-sm sm:font-extrabold font-bold">
                              {data?.num}
                            </p>
                          </div>
                          <div className="h-full absolute top-[55%]">
                            <div className="w-[2px] h-[90%] bg-white border-none"></div>
                          </div>
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        <div className="w-[45%]"></div>
                        <div className=" w-[10%] flex justify-center items-center relative">
                          <div className="bg-white border-2 xl:h-24 lg:h-20 sm:h-12 h-6 xl:w-24 lg:w-20 sm:w-12 w-6 rounded-full flex justify-center items-center">
                            <p className="lg:text-3xl sm:text-xl text-sm sm:font-extrabold font-bold">
                              {data?.num}
                            </p>
                          </div>
                          <div className="h-full absolute top-[55%]">
                            <div className="w-[2px] h-[100%] bg-white border-none"></div>
                          </div>
                        </div>{" "}
                        <div className="w-[45%] lg:py-10 py-5 xl:pl-20 lg:pl-5 pl-1">
                          <div className="bg-white rounded-2xl xl:p-10 lg:p-7 md:p-5 p-2">
                            <h1 className=" md:text-xl text-base lg:leading-[37px] leading-7 md:font-bold font-medium">
                              {data?.title}
                            </h1>
                            <p className="font-normal md:text-base text-sm text-[#333232] lg:mt-5 md:mt-3 mt-1">
                              {data?.body}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              ) : (
                <div className="flex">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-[45%] lg:py-10 py-5 xl:pl-20 lg:pl-5 pl-1">
                        <div className="bg-white rounded-2xl xl:p-10 lg:p-7 md:p-5 p-2">
                          <h1 className=" md:text-xl text-base lg:leading-[37px] leading-7 md:font-bold font-medium">
                            {data?.title}
                          </h1>
                          <p className="font-normal md:text-base text-sm text-[#333232] lg:mt-5 md:mt-3 mt-1">
                            {data?.body}
                          </p>
                        </div>
                      </div>
                      <div className=" w-[10%] flex justify-center items-center relative">
                        <div className="bg-white border-2 xl:h-24 lg:h-20 sm:h-12 h-6 xl:w-24 lg:w-20 sm:w-12 w-6 rounded-full flex justify-center items-center">
                          <p className="lg:text-3xl sm:text-xl text-sm sm:font-extrabold font-bold">
                            {data?.num}
                          </p>
                        </div>
                        <div className="h-full absolute top-[55%]">
                          <div className="w-[2px] h-[100%] bg-white border-none"></div>
                        </div>
                      </div>{" "}
                    </>
                  ) : (
                    <>
                      <div className="w-[45%]"></div>
                      <div className=" w-[10%] flex justify-center items-center relative">
                        <div className="bg-white border-2 xl:h-24 lg:h-20 sm:h-12 h-6 xl:w-24 lg:w-20 sm:w-12 w-6 rounded-full flex justify-center items-center">
                          <p className="lg:text-3xl sm:text-xl text-sm sm:font-extrabold font-bold">
                            {data?.num}
                          </p>
                        </div>
                        <div className="h-full absolute md:top-[55%]">
                          <div className="w-[2px] h-[100%] bg-white border-none"></div>
                        </div>
                      </div>{" "}
                      <div className="w-[45%] lg:py-10 py-5 xl:pl-20 lg:pl-5 pl-1">
                        <div className="bg-white rounded-2xl xl:p-10 lg:p-7 md:p-5 p-2">
                          <h1 className=" md:text-xl text-base lg:leading-[37px] leading-7 md:font-bold font-medium">
                            {data?.title}
                          </h1>
                          <p className="font-normal md:text-base text-sm text-[#333232] lg:mt-5 md:mt-3 mt-1">
                            {data?.body}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </>
          );
        })}
        <div className="flex justify-center md:my-24 sm:my-16 my-10">
          <button
            className="bg-white md:px-3 px-2 py-2 text-[#FF0000] md:font-bold font-medium md:text-lg text-sm  rounded-xl"
            onClick={() => {
              setAllprojects(!allprojects);
            }}
          >
            {allprojects ? "Show More" : "Show Less"}
          </button>
        </div>

        <div className="bg-white rounded-3xl lg:p-20 md:p-10 p-5 flex">
          <div className=" w-[70%]">
            <h1 className=" lg:text-4xl md:text-2xl text-xl  font-bold">
              Get In Touch
            </h1>
            <div className="flex text-left">
              <div className="h-[3px] w-[50px]  bg-[#FF0000] mb-3 m"></div>
              <div className="h-[3px] w-[8px] ml-2 bg-[#FF0000] mb-3"></div>
              <div className="h-[3px] w-[4px] ml-1 bg-[#FF0000] mb-3"></div>
            </div>
            <p className="font-normal md:text-base text-sm text-[#333232] md:mt-5 mt-2">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
          </div>
          <div className="flex justify-center items-center w-[30%]">
            <button className="bg-black hover:bg-white hover:border-2 hover:border-[#FF0000] md:h-14 h-10 md:w-44 w-32 text-[#FF0000] sm:font-bold font-medium md:text-2xl sm:text-xl text-sm rounded-xl">
              Say Hello
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default portfolio;
