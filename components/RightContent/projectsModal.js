import { useAtom } from "jotai";
import { projectsModal } from "../../atom/AtomStates";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { projects } from "@/constant/constant";
import Link from "next/link";

const ProjectsModal = () => {
  // const [showModal, setShowModal] = React.useState(false);
  const [projectModal, setProjectsModal] = useAtom(projectsModal);
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            {projectModal.modalName === project.id && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <h3 className="text-3xl font-semibold text-white mb-3">
                          {project.title}
                        </h3>
                        <div className="flex justify-center items-center">
                          <img
                            style={{
                              display: "block",
                              width: "80vw",
                              height: "45vw",
                              objectFit: "full",
                            }}
                            src={project.image}
                          />
                        </div>
                        <p className="my-4 text-white text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex justify-evenly items-center">
                          <button
                            className="text-red-500 background-transparent font-bold border border-solid border-red-500 rounded hover:bg-red-500 hover:text-white uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setProjectsModal({
                                ...projectModal,
                                modalName: "none",
                              });
                            }}
                          >
                            Close
                          </button>
                          {project.link && (
                            <Link
                              className="bg-orange-700 text-white active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-transparent hover:text-orange-500 hover:border hover:border-solid hover:border-orange-500 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              href={project.link}
                            >
                              Visit Site
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ProjectsModal;
