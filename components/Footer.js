import React from "react";
import Link from "next/link";
const Footer = () => {
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
    {
      Name: "Contact Us",
      slug: "/services",
    },
  ];
  return (
    <div className="flex justify-center bg-[#EDEDED]">
      <div className="">
        <div className="flex justify-center">
          <img
            src="/portfolio/Group 49.svg"
            alt="image"
            className="mx-[120px] my-10 "
          />
        </div>
        <div className="Footer-Menu flex justify-center">
          {Routes.map((data, index) => {
            return (
              <Link href={"/" + data?.slug}>
                <div className="group">
                  <p className="mx-4 font-medium text-base">{data?.Name}</p>
                  <div className="group-hover:block hidden mx-4 h-[3px] w-[35px] text-center  bg-[#FF0000]"></div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" flex my-3">
          <p className="font-medium text-base mx-5">Mobile: +92 3416062772</p>
          <p className="font-medium text-base mx-5 underline">
            Email: mehran.shiraz0123@outlook.com
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
