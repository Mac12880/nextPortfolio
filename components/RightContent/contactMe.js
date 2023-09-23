import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { socials } from "../../constant/constant";
const ContactMe = () => {
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
  return (
    <section id="contacts" className="flex justify-center items-center mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] h-full p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-zinc-800 dark:border-gray-200">
        {/* left */}
        <div className="flex flex-col w-[100%] lg:w-[50%] text-white items-center content-between h-[50%]">
          {/* <div className="flex flex-col w-[100%] lg:w-[50%] text-white items-left lg:items-center content-between h-[50%]"> */}
          <div className="flex justify-center items-start w-full ">
            <b className="text-[5vw] lg:text-[3vw]">Contact Me</b>
          </div>

          <div className="flex justify-center lg:justify-evenly items-end w-[75%] h-1/2">
            {...socials.map((item) => {
              if (item.title === "Email") {
                return;
              } else {
                return (
                  <Link
                    key={item.id}
                    className="hover-button mx-[1vw] lg:mx-0"
                    href={item.link}
                  >
                    {/* default */}
                    <span className="hover-button--off">
                      <div className="text-white cursor-pointer text-[5vw] md:text-[3.5vw] lg:text-[2vw] py-[1vw]">
                        {item.icon}
                      </div>
                    </span>
                    {/* hover */}
                    <span className="hover-button--on">
                      <div
                        className="text-white cursor-pointer text-[5vw] md:text-[3vw] lg:text-[2vw] py-[1vw]"
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
        <div className="flex justify-center items-center flex-col w-[100%] lg:w-[50%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex justify-center items-center flex-col w-full pt-6 pb-6"
          >
            {/* Name */}
            <div className=" relative z-0 mb-5 w-[95%] sm:w-[75%]">
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
            <div className=" relative z-0 mb-5 w-[95%] sm:w-[75%]">
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
            <div className=" relative z-0 mb-5 w-[95%] sm:w-[75%]">
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
            <div className=" relative z-0 mb-5 w-[95%] sm:w-[75%]">
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
                className="w-[100%] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-zinc-800 dark:text-white dark:border-white dark:hover:bg-zinc-700 dark:hover:border-white dark:focus:ring-zinc-900"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default ContactMe;
