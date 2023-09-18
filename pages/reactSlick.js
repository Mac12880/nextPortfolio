import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

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
      <div className="text-black dark:text-white">
        <Slider {...settings}>
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <div className="flex justify-start items-center">
                  <h2 style={{ fontSize: "2vw" }}> {project.title}</h2>
                  <button className="p-1">
                    <AiOutlineInfoCircle style={{ fontSize: "1.5vw" }} />
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
    );
  }
}
