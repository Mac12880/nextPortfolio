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
      <div className="flex justify-center items-center flex-col w-[100%] mt-[5vw]">
        <div
          className="flex justify-center w-[9vw] lg:w-[11vw]"
          style={{ borderBottom: "1px solid white" }}
        >
          <b className="text-white text-[5vw] lg:text-[3vw]">Projects</b>
        </div>
        <div className="w-[90%] my-[1vw] h-[100%]">
          <div className="text-black dark:text-white">
            <Slider {...settings}>
              {projects.map((project) => {
                return (
                  <div key={project.id}>
                    <div className="flex justify-start items-center">
                      <h2 className="text-[4vw] lg:text-[2vw] ps-1">
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
                        <AiOutlineInfoCircle className="text-[3.5vw] lg:text-[1.5vw]" />
                      </button>
                    </div>
                    <div className="h-[100%] text-center bg-gray-300 flex justify-center items-center flex-col">
                      <img
                        className="block w-[90vw] h-[45vw] object-fit"
                        src={project.image}
                        alt={`${project.title} picture`}
                      />
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
