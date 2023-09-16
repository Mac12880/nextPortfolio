import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
export default function ProjectSwiper() {
  const projects = [
    {
      id: 1,
      title: "Tagpros Website",
      description:
        "I undertook a website project during my internship at Tagpros, where I collaborated with the Tagpros web development team to create a Learning Management System (LMS) website. My role included leading a team of interns and working closely with the web developers to complete the project. We utilized technologies such as React.js, Next.js, Bootstrap, Node.js, and MongoDB to accomplish our goals.",
      image: "/img/TagprosWebsite1.jpg",
    },
    {
      id: 2,
      title: "Calimlim Dental Website",
      description:
        "I worked on a website project for a local dentist clinic, where I collaborated with a team of two other web developers to create a website for their clinic. The team utilized technologies such as React.js, Next.js, Bootstrap, Node.js, and MongoDB.",
      image: "/img/CalimlimDentalWebsite1.jpg",
      link: "https://calimlimv5.vercel.app/",
    },
    {
      id: 3,
      title: "First Portfolio Website",
      description:
        "My first deployed website for my portfolio, created before my internship, where I utilized HTML, CSS, and JavaScript.",
      image: "/img/FirstPortfolioWebsite1.jpg",
      link: "https://mac12880.github.io/MarcAugustineJuan/",
    },
    {
      id: 4,
      title: "Todo List",
      description:
        "My first website project was during my training at JavaScript Bootcamp hosted by Bayan Academy and J.P. Morgan. This was the initial website I developed using HTML, CSS, and JavaScript, just before my internship.",
      image: "/img/ToDoListWebsite1.jpg",
      link: "https://mac12880.github.io/ToDoList/",
    },
    {
      id: 5,
      title: "Jetpack Compose Pomodoro Timer",
      description:
        "I collaborated with random team members during the Jetpack Compose Study Jam to create a Pomodoro Timer using Jetpack Compose. We utilized Kotlin, Jetpack Compose, and Android Studio for this project. Our work spanned three days, on the first day we dedicated our time to learning Jetpack Compose. The second day involved task delegation and the initiation of the project. Finally, on the third day, we focused on finalizing and polishing our project.",
      image: "/img/PomTimerMix.png",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "100%", height: "100%" }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide
              key={project.id}
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
              {/* <div className="projectSwiperContainer"> */}
              <img
                src={project.image}
                alt={`${project.title} picture`}
                className="projectSwiperImage"
              />
              <div className="projectSwiperOverlay">
                <div className="projectSwiperHeaderText">{project.title}</div>
                <div className="projectSwiperText">{project.description}</div>
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
              {/* </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
