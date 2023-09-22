import React from "react";
import { TypeAnimation } from "react-type-animation";
const RightHero1 = () => {
  return (
    <section className="rchero1">
      <div className="rchero1left">
        <img className="profilePic" src="mjuanpic.png" alt="Profile pic" />
      </div>
      <div className="rchero1right" id="home">
        <TypeAnimation
          className="hero1Header"
          sequence={[`I'm a Developer and a Designer.`, 1000, ""]}
          speed={50}
          style={{ whiteSpace: "normal", fontWeight: "bold" }}
          repeat={Infinity}
        />
        <b className="hero1SubHeader">Marc Augustine R. Juan</b>
        <p className="hero1Paragraph">
          I am seeking an opportunity in software development as a front-end web
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
