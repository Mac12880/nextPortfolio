import React from "react";
import { skills, socials } from "../../constant/constant";

const About = () => {
  const SkillsItem = ({ title, percentage }) => {
    return (
      <div
        className="flex justify-center flex-row"
        style={{
          backgroundColor: "lightgray",
          width: "60%",
          height: "auto",
          marginTop: "5px",
          borderRadius: "1vw",
        }}
      >
        <div
          className="flex justify-center "
          style={{
            width: "20%",
            background: "lightgray",
            borderRadius: "1vw 0 0 1vw",
          }}
        >
          <p className="" style={{ fontSize: "1.8vw", color: "black" }}>
            {title}
          </p>
        </div>
        <div className="" style={{ width: "70%" }}>
          <div
            className=""
            style={{
              backgroundColor: "#efa00b",
              width: `${percentage}%`,
              borderRadius: "0.5vw 0.5vw 0.5vw 0.5vw",
            }}
          >
            <p
              className=""
              style={{ color: "#efa00b", fontSize: "1.8vw", textAlign: "left" }}
            >
              {percentage}%
            </p>
          </div>
        </div>
        <div className="flex justify-center" style={{ width: "10%" }}>
          <p className="" style={{ fontSize: "1.8vw" }}>
            {percentage}%
          </p>
        </div>
      </div>
    );
  };
  return (
    <section id="about">
      <div className="flex justify-center" style={{ width: "100%" }}>
        <div
          className="flex justify-center"
          style={{ width: "9vw", borderBottom: "1px solid white" }}
        >
          <b className="text-white" style={{ fontSize: "3vw" }}>
            About
          </b>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="rcHero2AboutMe text-white">
          Hi, I&apos;m Marc. I have completed my internship and am now embarking
          on my freelance journey as either a front-end web developer or a
          full-stack developer. I&apos;ve already undertaken projects using
          Next.js and React.js, collaborating with talented individuals to craft
          digital products for both businesses and consumers. I am confident in
          my skills and design abilities, naturally curious, and continually
          refining my technical and design skills.
        </p>
      </div>

      <div className="flex justify-center" style={{ width: "100%" }}>
        <div
          className="flex justify-center"
          style={{
            width: "7.1vw",
            borderBottom: "1px solid white",
          }}
        >
          <b className="text-white" style={{ fontSize: "3vw" }}>
            Skills
          </b>
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-col"
        style={{
          paddingTop: "1vw",
          paddingBottom: "1vw",
        }}
      >
        {skills.map((item) => {
          return <SkillsItem {...item} key={item.id}></SkillsItem>;
        })}
      </div>
    </section>
  );
};

export default About;
