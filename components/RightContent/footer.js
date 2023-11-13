import React from "react";
import Link from "next/link";
import { content } from "../../constant/constant";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const MenuItem = ({ title, link, icon }) => {
    return (
      <Link href={`/#${link}`} passHref>
        <div className="flex justify-center items-center flex-col text-[5vw] md:text-[4vw] text-white">
          {icon}
          {/* <p className="text-[3vw] md:text-[2vw]">{title}</p> */}
          <p className="text-[3vw]">{title}</p>
        </div>
      </Link>
    );
  };
  return (
    <>
      <footer className="h-[3vh] text-[2vh] hidden lg:flex justify-center items-center sticky bg-black inset-0 bottom-0 w-full font-light opacity-50">
        <b className="text-white">MARC JUAN</b>
        <b className="" style={{ marginLeft: "0.5vw", color: "orange" }}>
          ©2023
        </b>
      </footer>
      {/* For Mobile and Ipads */}
      <footer
        // className="h-[11vh] flex lg:hidden justify-evenly items-center sticky bg-black inset-0 bottom-0 w-full font-light"
        className="h-[15%] py-[1.5vw] flex lg:hidden justify-evenly items-center sticky bg-black inset-0 bottom-0 w-full font-light"
        // style={{ height: "10vh" }}
      >
        {content.map((item) => {
          return <MenuItem {...item} key={item.id}></MenuItem>;
        })}
        <Link href={`/#contacts`} passHref>
          <div className="flex justify-center items-center flex-col text-[5vw] md:text-[4vw] text-white">
            <AiOutlineMail />
            {/* <p className="text-[3vw] md:text-[2vw]">Contacts</p> */}
            <p className="text-[3vw]">Contacts</p>
          </div>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
