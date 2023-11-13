import React from "react";
import { skills, socials } from "../../constant/constant";

const About = () => {
  const SkillsItem = ({ title, percentage }) => {
    return (
      <div className="flex justify-center flex-row w-[90%] lg:w-[60%] h-auto mt-[5px] bg-gray-300 rounded-[1vw]">
        <div
          className="flex justify-center w-[30%] bg-gray-300"
          style={{
            borderRadius: "1vw 0 0 1vw",
          }}
        >
          <p className="text-[3vw] lg:text-[1.8vw] text-black">{title}</p>
        </div>
        <div className="w-[60%]">
          <div
            className={`rounded-[0.5vw] bg-[#efa00b] w-[${percentage}%]`}
            // style={{
            //   backgroundColor: "#efa00b",
            //   width: `${percentage}%`,
            // }}
          >
            <p
              className="text-[3vw] lg:text-[1.8vw] text-left]"
              style={{ color: "#efa00b" }}
            >
              {percentage}%
            </p>
          </div>
        </div>
        <div className="flex justify-center text-black w-[10%]">
          <p className="text-[3vw] lg:text-[1.8vw]">{percentage}%</p>
        </div>
      </div>
    );
  };
  return (
    <section id="about" className="pt-[30px] pb-[50px] lg:py-0">
      <div className="flex justify-center w-[100%]">
        <div
          className="flex justify-center w-[9vw] "
          style={{ borderBottom: "1px solid white" }}
        >
          <b className="text-white text-[5vw] lg:text-[3vw] mt-[5vw]">About</b>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="w-[94%] text-white text-[3vw] lg:text-[2vw] text-justify pt-[1vw] pb-[1vw] whitespace-pre-wrap">
          Hi, I&apos;m Marc. I have completed my internship and am now embarking
          on my freelance journey as either a front-end web developer or a
          full-stack developer. I&apos;ve already undertaken projects using
          Next.js and React.js, collaborating with talented individuals to craft
          digital products for both businesses and consumers. I am confident in
          my skills and design abilities, naturally curious, and continually
          refining my technical and design skills.
        </p>
      </div>

      <div className="flex justify-center w-[100%] pt-[30px] lg:pt-0">
        <div
          className="flex justify-center w-[9vw] lg:w-[7.1vw]"
          style={{
            borderBottom: "1px solid white",
          }}
        >
          <b className="text-white text-[5vw] lg:text-[3vw]">Skills</b>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pt-[1vw] pb-[1vw]">
        {skills.map((item) => {
          return <SkillsItem {...item} key={item.id}></SkillsItem>;
        })}
      </div>
    </section>
  );
};

export default About;
