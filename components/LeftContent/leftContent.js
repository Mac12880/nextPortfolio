import React from "react";
import Link from "next/link";
import { content, socials } from "../../constant/constant";

const LeftContent = () => {
  const MenuItem = ({ title, link, icon }) => {
    return (
      <Link href={`/#${link}`} passHref>
        <div className="sidebarIcons">{icon}</div>
      </Link>
    );
  };
  return (
    <div className="leftContainer">
      {content.map((item) => {
        return <MenuItem {...item} key={item.id}></MenuItem>;
      })}
      <hr style={{ color: "white", width: "80%" }} />

      {socials.map((item) => {
        return (
          <Link key={item.id} className="hover-button" href={item.link}>
            {/* default */}
            <span className="hover-button--off">
              <div className="sidebarIcons">{item.icon}</div>
            </span>
            {/* hover */}
            <span className="hover-button--on">
              <div className="sidebarIcons" style={{ color: `${item.color}` }}>
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
