import React from "react";
import { TypeAnimation } from "react-type-animation";
const RightHero1 = () => {
  return (
    <section
      // className="w-auto h-auto lg:h-[100%] m-5 lg:m-0 flex justify-left items-center flex-col lg:flex-row overflow-x-hidden overflow-y-hidden"
      className="w-auto h-auto lg:py-[5vw] lg:h-fit xl:h-[100%] px-[6vw] xl:p-0 flex justify-left items-center flex-col xl:flex-row overflow-x-hidden overflow-y-hidden"
      style={{ background: "#777777" }}
    >
      <div className="w-full xl:w-[30%] h-auto flex justify-center items-center p-2">
        <img
          className="w-[70vw] lg:w-[40vw] xl:w-[90%] h-auto lg:m-[15px]"
          src="mjuanpic.png"
          alt="Profile pic"
        />
      </div>
      <div
        // className="w-full h-auto pt-[30px] pb-[50px] lg:py-0 lg:w-[70%] lg:h-[100%] flex flex-col justify-center items-center"
        className="w-full h-auto pt-[30px] pb-[50px] lg:py-0 xl:w-[70%] xl:h-[100%] flex flex-col justify-center items-center"
        id="home"
      >
        <TypeAnimation
          className="w-[100%] h-auto text-white text-left whitespace-normal font-bold text-[4vw] lg:text-[2.5vw]"
          sequence={[`I'm a Developer and a Designer.`, 1000, ""]}
          speed={50}
          repeat={Infinity}
        />
        <b className="w-[100%] h-auto text-white text-left text-[7vw] lg:text-[5vw]">
          Marc Augustine R. Juan
        </b>
        <p className="w-[100%] h-auto text-white text-justify whitespace-pre-wrap text-[3vw]  xl:text-[1.3vw] pe-0 lg:pe-[1vw] ">
          I am seeking an opportunity in software development as a front-end
          developer or full-stack developer, where I can apply my theoretical
          knowledge to real-world projects, enhance my technical skills, and
          gain valuable experience while working in a collaborative team
          environment.
        </p>
      </div>
    </section>
  );
};

export default RightHero1;
