import React from "react";
import Head from "next/head";
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
import ProjectsModal from "../components/RightContent/projectsModal";
import Footer from "../components/RightContent/footer";
import About from "../components/RightContent/about";
import ContactMe from "../components/RightContent/contactMe";
import LeftContent from "../components/LeftContent/leftContent";
import RightHero1 from "../components/RightContent/rightHero1";
import Projects from "../components/RightContent/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Juan&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="bg-black h-full w-[100%]"> */}
      <main className="bg-black h-[100%] w-[100%]">
        <div
          // content1
          // className="flex flex-row h-[89vh] w-[100%] lg:h-[97vh] p-[0.7vw]"
          className="flex flex-row h-[85%] w-[100%] lg:h-[97vh] p-[0.7vw]"
        >
          <div
            // Left Content
            className="hidden lg:flex lg:w-[5%]"
            style={{ padding: "0 0.7vw 0 0" }}
          >
            <LeftContent />
          </div>
          <div
            // Right Content
            className="dark w-full h-[88vh] lg:w-[95%] lg:h-full bg-[#777777]"
            style={{
              // background: "#777777",
              borderRadius: "1vw 1vw 1vw 1vw",
            }}
          >
            <div className="h-[10%]">
              <div
                className="w-[100%] h-[100%] flex justify-between items-center px-[2.5vw] py-[1.5vw] overflow-hidden bg-[#777777]"
                style={{
                  // background: "#777777",
                  borderRadius: "1vw 1vw 0 0",
                }}
              >
                <div
                  // Home
                  // className="h-[6vh] w-[6vh] px-[1vw] py[0.5vw] lg:h-[70%] lg:w-[5%] flex justify-center items-center bg-black bg-opacity-80 text-white cursor-pointer rounded-full lg:rounded-full hover:bg-opacity-100"
                  className="h-fit w-fit px-[1.5vw] py-[1.5vw] lg:h-[70%] lg:w-[5%] flex justify-center items-center bg-black bg-opacity-80 text-white cursor-pointer rounded-full lg:rounded-full hover:bg-opacity-100"
                >
                  <Link href="#home" passHref>
                    {/* <GoHome className="text-[4vh] lg:text-[2vw]" /> */}
                    <GoHome className="text-[5vw] md:text-[4vw] lg:text-[2vw]" />
                  </Link>
                </div>
                <Link
                  // Resume
                  // href="/JUAN-StudentResume.pdf"
                  // href="/Juan_Marc-Resume_2.pdf"
                  href="/JuanMarcResume-11-21-2024.pdf"
                  target="_blank"
                  // className="h-[6vh] w-[12vh] px-[1vw] py[0.5vw] lg:h-[70%] lg:w-[10vw] flex justify-center items-center bg-black bg-opacity-80 text-white cursor-pointer rounded-full lg:rounded-full hover:bg-opacity-100"
                  className="h-fit w-fit px-[1.5vw] py-[1.55vw] lg:h-[70%] lg:w-[10vw] flex justify-center items-center bg-black bg-opacity-80 text-white cursor-pointer rounded-full lg:rounded-full hover:bg-opacity-100"
                >
                  {/* <p className="text-[2.5vh] lg:text-[1.5vw]">Resume</p> */}
                  <p className="text-[3vw] lg:text-[1.5vw]">Resume</p>
                </Link>
              </div>
            </div>
            <div
              className="w-full h-[90%] overflow-y-scroll overflow-x-hidden lg:overflow-y-scroll lg:overflow-x-hidden whitespace-nowrap bg-[#777777]"
              style={{
                borderRadius: "0 0 1vw 1vw",
                //  background: "#777777"
              }}
            >
              <RightHero1 />
              <section
                // rchero2
                className="w-full p-[6vw] lg:p-[1vw] h-auto "
                style={{
                  background: "rgb(0,0,0)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(18,18,18,0.7) 3%, rgba(18,18,18,0.8) 13%, rgba(18,18,18,0.9) 34%, rgba(18,18,18,1) 46%, rgba(18,18,18,1) 100%)",
                }}
              >
                <About />
                <Projects />
                <ContactMe />
              </section>
            </div>
          </div>
        </div>
        <Footer />
        <ProjectsModal />
      </main>
    </>
  );
}
