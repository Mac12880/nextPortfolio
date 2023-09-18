import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  GoHome,
  GoHomeFill,
  GoPerson,
  GoPersonFill,
  GoFileDirectory,
  GoFileDirectoryFill,
  GoMail,
} from "react-icons/go";
import {
  AiOutlineGithub,
  AiFillGithub,
  AiOutlineFacebook,
  AiFillFacebook,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillMail,
} from "react-icons/ai";
// import ProjectSwiper from "./projectSwiper";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import SimpleSlider from "../components/reactSlick";
//
import { useAtom } from "jotai";
import { projectsModal } from "../atom/AtomStates";
//
import Slider from "react-slick";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { projects, skills, content, socials } from "../constant/constant";
import ProjectsModal from "../components/projectsModal";

const MenuItem = ({ title, link, icon }) => {
  return (
    <Link href={`/#${link}`} passHref>
      <div className="sidebarIcons">{icon}</div>
    </Link>
  );
};

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

export default function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cs9rcyz",
        "template_5s9ae0e",
        form.current,
        "9IIdycsS2IbbLhtZc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // Projects Modal End
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [showModal, setShowModal] = React.useState(false);
  // Projects Modal End
  const [projectModal, setProjectsModal] = useAtom(projectsModal);

  return (
    <>
      <Head>
        <title>Marc Juan&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="indexBg">
        <div className="hero1">
          <div className="left">
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
                      <div
                        className="sidebarIcons"
                        style={{ color: `${item.color}` }}
                      >
                        {item.iconhover}
                      </div>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="right dark">
            <div className="rightHeader">
              <div className="rcHeader">
                <div className="rcHeaderIcon">
                  <Link href="/" passHref>
                    <GoHome />
                  </Link>
                </div>
                <div className="rcHeaderButton">
                  <p>Resume</p>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <section className="rchero1">
                <div className="rchero1left">
                  <img
                    className="profilePic"
                    src="mjuanpic.png"
                    alt="Profile pic"
                  />
                </div>
                <div className="rchero1right" id="home">
                  {/* <b className="hero1Header">Web Developer</b> */}
                  <TypeAnimation
                    className="hero1Header"
                    sequence={[`I'm a Developer and a Designer.`, 1000, ""]}
                    speed={50}
                    style={{ whiteSpace: "normal", fontWeight: "bold" }}
                    repeat={Infinity}
                  />
                  <b className="hero1SubHeader">Marc Augustine R. Juan</b>
                  <p className="hero1Paragraph">
                    I am seeking an opportunity in software development as a
                    front-end web developer or full-stack developer, where I can
                    apply my theoretical knowledge to real-world projects,
                    enhance my technical skills, and gain valuable experience
                    while working in a collaborative team environment.
                  </p>
                </div>
              </section>
              <section className="rchero2" id="about">
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
                    Hi, I&apos;m Marc. I have completed my internship and am now
                    embarking on my freelance journey as either a front-end web
                    developer or a full-stack developer. I&apos;ve already
                    undertaken projects using Next.js and React.js,
                    collaborating with talented individuals to craft digital
                    products for both businesses and consumers. I am confident
                    in my skills and design abilities, naturally curious, and
                    continually refining my technical and design skills.
                  </p>
                </div>

                <div className="flex justify-center" style={{ width: "100%" }}>
                  <div
                    className="flex justify-center"
                    style={{ width: "7.1vw", borderBottom: "1px solid white" }}
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

                <section id="projects">
                  <div
                    className="flex justify-center items-center flex-col"
                    style={{
                      width: "90vw",
                      marginTop: "5vw",
                    }}
                  >
                    <div
                      className="flex justify-center"
                      style={{ width: "11vw", borderBottom: "1px solid white" }}
                    >
                      <b className="text-white" style={{ fontSize: "3vw" }}>
                        Projects
                      </b>
                    </div>
                    <div
                      style={{
                        width: "90%",
                        marginTop: "1vw",
                        marginBottom: "1vw",
                        height: "100%",
                      }}
                    >
                      {/* <ProjectSwiper /> */}
                      {/* <SimpleSlider /> */}
                      <div className="text-black dark:text-white">
                        <Slider {...settings}>
                          {projects.map((project) => {
                            return (
                              <div key={project.id}>
                                <div className="flex justify-start items-center">
                                  <h2 style={{ fontSize: "2vw" }}>
                                    {" "}
                                    {project.title}
                                  </h2>
                                  <button
                                    className="p-1"
                                    onClick={() => {
                                      setProjectsModal({
                                        ...projectModal,
                                        modalName: project.id,
                                      });
                                      console.log(projectModal);
                                    }}
                                  >
                                    <AiOutlineInfoCircle
                                      style={{ fontSize: "1.5vw" }}
                                    />
                                  </button>
                                </div>
                                <div
                                  style={{
                                    textAlign: "center",
                                    background: "lightgray",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: "100%",
                                  }}
                                >
                                  <img
                                    src={project.image}
                                    alt={`${project.title} picture`}
                                    style={{
                                      display: "block",
                                      width: "90vw",
                                      height: "45vw",
                                      objectFit: "full",
                                    }}
                                  />
                                  <div className="projectSwiperOverlay">
                                    <div className="projectSwiperHeaderText">
                                      {project.title}
                                    </div>
                                    <div className="projectSwiperText">
                                      {project.description}
                                    </div>
                                    {project.link ? (
                                      <Link href={project.link} passHref>
                                        <button className="projectSwiperSiteButton">
                                          Visit Site
                                        </button>
                                      </Link>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center"></div>
                </section>

                <section
                  id="contacts"
                  className="flex justify-center items-center "
                >
                  <div className="flex justify-center items-center w-11/12 mt-60 h-full p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-zinc-800 dark:border-gray-200">
                    {/* left */}
                    <div className="flex flex-col w-2/4 text-white items-center content-between h-1/2">
                      <div className="flex justify-center items-start w-full ">
                        <b style={{ fontSize: "3vw" }}>Contact Me</b>
                      </div>

                      <div className="flex justify-evenly items-end w-3/4 h-1/2">
                        {...socials.map((item) => {
                          if (item.title === "Email") {
                            return;
                          } else {
                            return (
                              <Link
                                key={item.id}
                                className="hover-button"
                                href={item.link}
                              >
                                {/* default */}
                                <span className="hover-button--off">
                                  <div
                                    className="sidebarIcons"
                                    // style={{ fontSize: "2vw" }}
                                  >
                                    {item.icon}
                                  </div>
                                </span>
                                {/* hover */}
                                <span className="hover-button--on">
                                  <div
                                    className="sidebarIcons"
                                    style={{ color: `${item.color}` }}
                                  >
                                    {item.iconhover}
                                  </div>
                                </span>
                              </Link>
                            );
                          }
                        })}
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex justify-center items-center flex-col w-2/4">
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex justify-center items-center flex-col w-full pt-6 pb-6"
                      >
                        {/* Name */}
                        <div className=" relative z-0 mb-5 w-3/4">
                          <input
                            type="text"
                            id="floating_standard_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            name="name_from"
                            required
                          />
                          <label
                            htmlFor="floating_standard_name"
                            className="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Name
                          </label>
                        </div>
                        {/* email */}
                        <div className=" relative z-0 mb-5 w-3/4">
                          <input
                            type="email"
                            id="floating_standard_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            name="email_from"
                            required
                          />
                          <label
                            htmlFor="floating_standard_email"
                            className="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email
                          </label>
                        </div>
                        {/* Subject */}
                        <div className=" relative z-0 mb-5 w-3/4">
                          <input
                            type="text"
                            id="floating_standard_subject"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            name="subject_from"
                            required
                          />
                          <label
                            htmlFor="floating_standard_subject"
                            className="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Subject
                          </label>
                        </div>

                        {/* message */}
                        <div className=" relative z-0 mb-5 w-3/4">
                          <textarea
                            type="email"
                            id="floating_standard_message"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                            placeholder=" "
                            name="message_from"
                            style={{ minHeight: "50px" }}
                            required
                          />
                          <label
                            htmlFor="floating_standard_message"
                            className="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Message
                          </label>
                        </div>
                        <div className="relative z-0 ">
                          <button
                            type="submit"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-zinc-800 dark:text-white dark:border-white dark:hover:bg-zinc-700 dark:hover:border-white dark:focus:ring-zinc-900"
                            style={{ width: "100%" }}
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex justify-center items-center"></div>
                </section>
              </section>
            </div>
          </div>
        </div>
        <div className="footer2">
          <b className="text-white">MARC JUAN</b>
          <b className="" style={{ marginLeft: "0.5vw", color: "orange" }}>
            ©2023
          </b>
        </div>
        <ProjectsModal />
      </main>
    </>
  );
}
