import React, { useRef } from "react";
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
import SimpleSlider from "../components/RightContent/projects";
import ProjectsModal from "../components/RightContent/projectsModal";
import Footer from "../components/RightContent/footer";
import About from "../components/RightContent/about";
import ContactMe from "../components/RightContent/contactMe";
import LeftContent from "../components/LeftContent/leftContent";
import RightHero1 from "@/components/RightContent/rightHero1";
import Projects from "../components/RightContent/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Juan&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="indexBg">
        <div className="hero1">
          <div className="left">
            <LeftContent />
          </div>
          <div className="right dark">
            <div className="rightHeader">
              <div className="rcHeader">
                <div className="rcHeaderIcon">
                  <Link href="#home" passHref>
                    <GoHome />
                  </Link>
                </div>
                <div className="rcHeaderButton">
                  <p>Resume</p>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <RightHero1 />
              <section className="rchero2">
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
