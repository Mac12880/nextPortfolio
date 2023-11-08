import React from "react";
import Link from "next/link";
import { content, socials } from "../../constant/constant";

const LeftContent = () => {
  const MenuItem = ({ title, link, icon }) => {
    return (
      <Link href={`/#${link}`} passHref>
        <div
          className="text-white cursor-pointer"
          style={{
            fontSize: "2vw",
            padding: "1vw",
          }}
        >
          {icon}
        </div>
      </Link>
    );
  };
  return (
    <div
      className="hidden lg:flex flex-col justify-evenly items-center w-full h-full rounded"
      style={{ background: "#121212", borderRadius: "1vw" }}
    >
      {content.map((item) => {
        return <MenuItem {...item} key={item.id}></MenuItem>;
      })}
      <hr style={{ color: "white", width: "80%" }} />

      {socials.map((item) => {
        return (
          <Link
            key={item.id}
            className="hover-button"
            href={item.link}
            target="_blank"
          >
            {/* default */}
            <span className="hover-button--off">
              <div
                className="text-white cursor-pointer"
                style={{ fontSize: "2vw", padding: "1vw" }}
              >
                {item.icon}
              </div>
            </span>
            {/* hover */}
            <span className="hover-button--on">
              <div
                className="cursor-pointer"
                style={{
                  color: `${item.color}`,
                  fontSize: "2vw",
                  padding: "1vw",
                }}
              >
                {item.iconhover}
              </div>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftContent;
