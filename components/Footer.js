import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {
  const routes = useRouter();
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
    <div className="flex justify-center bg-[#EDEDED]">
      <div className="">
        <div className="flex justify-center">
          <img
            src="/portfolio/Group 58.svg"
            alt="image"
            className="lg:my-10 my-5 "
          />
        </div>
        <div className="Footer-Menu flex justify-center">
          {Routes.map((data, index) => {
            return (
              <Link href={"/" + data?.slug}>
                <div className="group cursor-pointer">
                  <p className="lg:mx-4 mx-2  font-medium text-base">{data?.Name}</p>
                  <div
                    className={`${
                      routes.asPath === data.slug ? "block" : "hidden"
                    } group-hover:block mx-4 h-[3px] w-[35px] text-center  bg-[#FF0000]`}
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="sm:flex text-center my-3">
          
          <p className="font-medium text-base mx-5"> <img src="/portfolio/phone.png" alt="@" className="w-4 inline pb-[2px] "/> +92 3416062772</p>
          <p className="font-medium text-base mx-5 underline"> <img src="/portfolio/email.png" alt="#" className="w-6 inline pb-[2px] "/>
            mehran.shiraz0123@outlook.com
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="border-2 border-black w-10 h-10 rounded-full flex justify-center items-center mx-2">
            <img src="/Vector (7).png" alt="image" className="w-2" />
          </div>
          <div className="border-2 border-black w-10 h-10 rounded-full flex justify-center items-center">
            <img src="/Vector (8).png" alt="image" className="w-3 " />
          </div>
          <div className="border-2 border-black w-10 h-10 rounded-full flex justify-center items-center mx-2 ">
            <img src="/Vector (9).png" alt="image" className="w-3 " />
          </div>
          <div className="border-2 border-black w-10 h-10 rounded-full flex justify-center items-center">
            <img src="/Vector (10).png" alt="image" className="w-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
