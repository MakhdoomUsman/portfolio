import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Header = ({ color = "white" }) => {
  const [actives, setActives] = useState(true);
  const router = useRouter();

  const Routes = [
    {
      Name: "Home",
      slug: "/",
    },
    {
      Name: "About Us",
      slug: "/whyme",
    },
    {
      Name: "Services",
      slug: "/services",
    },
    {
      Name: "Portfolio",
      slug: "/portfolio",
    },
  ];
  return (
    <>
      <div className="w-full lg:px-28 px-10 absolute flex justify-between items-center top-1 h-20">
        <Link href={"/"}>
          <img
            src="/portfolio/Group 59.svg"
            alt="image"
            className="lg:w-[25%] md:w-[30%] w-[50%]  cursor-pointer z-10"
          />
        </Link>
        <div className={`flex justify-between text-${color} cursor-pointer`}>
          {Routes.map((data, index) => {
            return (
              <Link href={"/" + data?.slug}>
                <div className="group md:block hidden">
                  <p className="lg:px-4 px-2 font-medium text-base">{data?.Name}</p>
                  <div
                    className={` ${
                      router.asPath === data.slug ? "block" : "hidden"
                    } group-hover:block 
                   mx-4 h-[3px] w-[35px] text-center bg-[#FF0000]`}
                  ></div>
                </div>
              </Link>
            );
          })}
          <div className="mobile md:hidden block">
            <span
              className={`cursor-pointer text-xl font-bold  ${
                actives ? "block" : "hidden"
              }`}
              onClick={() => setActives(!actives)}
            >
              &#119064;
            </span>
            <span
              className={`cursor-pointer font-bold ${
                !actives ? "block" : "hidden"
              }`}
              onClick={() => setActives(!actives)}
            >
              &#9587;
            </span>
          </div>
        </div>
      </div>
      <div
        className={`bg-black/5 h-screen w-full absolute md:hidden block ${
          !actives ? "block absolute z-10" : "hidden"
        }`}
        onClick={() => setActives(!actives)}
      >
        <div
          className={`bg-[#EDEDED] w-[320px] h-full absolute right-[1px] ${
            !actives ? "block absolute z-10" : "hidden"
          }`}
        >
          <div className=" md:hidden block ">
            <span
              className={`cursor-pointer font-bold flex justify-end pr-10 mt-7 ${
                !actives ? "block" : "hidden"
              }`}
              onClick={() => setActives(!actives)}
            >
              &#9587;
            </span>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className={`text-black cursor-pointer `}>
              {Routes.map((data, index) => {
                return (
                  <Link href={"/" + data?.slug}>
                    <div className="group p-3">
                      <p className="px-4 font-medium text-base">{data?.Name}</p>
                      <div
                        className={` ${
                          router.asPath === data.slug ? "block" : "hidden"
                        } group-hover:block 
                    mx-4 h-[3px] w-[35px] text-center bg-[#FF0000]`}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
