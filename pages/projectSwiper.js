import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Tagpros Website",
    description:
      "A website project for my internship in Tagpros, where me aswell as the web developers of Tagpros was tasked to create a website for their Learning Management System. I was assigned to lead the interns, and work closely with the web developers in finishing the website. The teams used React.js, Next.js, Bootstrap, Node.js, and MongoDB",
    image: "/img/TagprosWebsite1.jpg",
  },
  {
    id: 2,
    title: "Calimlim Dental Website",
    description:
      "A website project for a local dentist clinic, where me aswell as a team of 2 other web developers was tasked to create a website for their clinic. The team used React.js, Next.js, Bootstrap, Node.js, and MongoDB",
    image: "/img/CalimlimDentalWebsite1.jpg",
    link: "https://calimlimv5.vercel.app/",
  },
  {
    id: 3,
    title: "First Portfolio Website",
    description:
      "My first deployed website for my portfolio before my internship, where I used HTML, CSS, and JavaScript.",
    image: "/img/FirstPortfolioWebsite1.jpg",
    link: "https://mac12880.github.io/MarcAugustineJuan/",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "My first website project when I joined at a JavaScript Bootcamp hosted by Bayan Academy and J.P Morgan. This was the first website I created using HTML, CSS, and JavaScript just before my internship.",
    image: "/img/ToDoListWebsite1.jpg",
    link: "https://mac12880.github.io/ToDoList/",
  },
];

const ProjectSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => {
          return (
            <SwiperSlide {...project} key={project.id}>
              {/* <img className="swiperImage"
                src={project.image}
                style={{ height: "100%", objectFit: "contain" }}
              ></img> */}
              <div className="projectSwiperContainer">
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProjectSwiper;
