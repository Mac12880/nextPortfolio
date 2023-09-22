import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { projects } from "../../constant/constant";
import { useAtom } from "jotai";
import { projectsModal } from "../../atom/AtomStates";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [projectModal, setProjectsModal] = useAtom(projectsModal);

  return (
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
          <div className="text-black dark:text-white">
            <Slider {...settings}>
              {projects.map((project) => {
                return (
                  <div key={project.id}>
                    <div className="flex justify-start items-center">
                      <h2 style={{ fontSize: "2vw" }}> {project.title}</h2>
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
