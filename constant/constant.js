export const projects = [
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

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: 95,
  },
  {
    id: 2,
    title: "CSS",
    percentage: 95,
  },
  {
    id: 3,
    title: "Bootstrap CSS",
    percentage: 98,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    percentage: 98,
  },
  {
    id: 5,
    title: "JavaScript",
    percentage: 80,
  },
  {
    id: 6,
    title: "React.js",
    percentage: 80,
  },
  {
    id: 7,
    title: "Node.js",
    percentage: 50,
  },
  {
    id: 8,
    title: "Next.js",
    percentage: 90,
  },
  {
    id: 9,
    title: "UI Design",
    percentage: 80,
  },
  {
    id: 10,
    title: "Figma",
    percentage: 90,
  },
];

import {
  GoHome,
  GoHomeFill,
  GoPerson,
  GoPersonFill,
  GoFileDirectory,
  GoFileDirectoryFill,
  GoMail,
} from "react-icons/go";
export const content = [
  {
    id: 1,
    title: "Home",
    link: "home",
    icon: <GoHome />,
    iconActive: <GoHomeFill />,
  },
  {
    id: 2,
    title: "About Me",
    link: "about",
    icon: <GoPerson />,
    iconActive: <GoPersonFill />,
  },
  {
    id: 3,
    title: "Projects",
    link: "projects",
    icon: <GoFileDirectory />,
    iconActive: <GoFileDirectoryFill />,
  },
  // {
  //   id: 4,
  //   title: "Contacts",
  //   link: "contacts",
  //   icon: <GoMail />,
  //   iconActive: <GoMail />,
  // },
];

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
export const socials = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/Mac12880",
    icon: <AiOutlineGithub />,
    iconhover: <AiFillGithub />,
    color: "#6e5494",
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://www.facebook.com/marc.juan6",
    icon: <AiOutlineFacebook />,
    iconhover: <AiFillFacebook />,
    color: "#4267B2",
  },
  {
    id: 3,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/marcjuan1/",
    icon: <AiOutlineLinkedin />,
    iconhover: <AiFillLinkedin />,
    color: "#0077B5",
  },
  {
    id: 4,
    title: "Email",
    link: "#contacts",
    icon: <AiOutlineMail />,
    iconhover: <AiFillMail />,
    color: "#c71610",
  },
];
