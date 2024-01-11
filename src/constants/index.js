import { Link } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C/C++",
    icon: web,
  },
  {
    title: "Data Structures and Algorithm",
    icon: mobile,
  },
  {
    title: "Frontend Development",
    icon: backend,
  },
  {
    title: "OOPS, DBMS, Operating System",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "3D Portfolio",
    company_name: "Starbucks",
    icon: meta,
    iconBg: "#383E56",
    date: "December 2023",
    points: [
      "Designed and developed a visually stunning 3D portfolio website.",
      "Employed responsive design principles, ensuring seamless functionality across various devices.",
      "Integrated a user-friendly navigation system, allowing visitors to easily navigate through different sections of the website and gain insights into my expertise.",
      "Tools Used: HTML, CSS, JavaScript, React, Tailwindcss, Three.js.",
    ],
  },
  {
    title: "Trip Planner",
    company_name: "Tesla",
    icon: meta,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Conceptualized and excuted the development of a user-friendly trip planner website.",
      "Pioneered the development of an innovative trip planner website infused with AI capabilities.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Tools Used: Wix AI, Chatgpt, JavScript.",
    ],
  },
  {
    title: "Jokes",
    company_name: "Shopify",
    icon: meta,
    iconBg: "#383E56",
    date: "July 2023",
    points: [
      "Spearheaded the creation of a distinctive Chrome extension designed to entertain users by delivering a joke with each click.",
      "Received positive user feedback attesting to the extension's effectiveness in providing lighthearted moments, emphasizing the project's success in creating a positive impact on users' online interactions.",
      "Effectively deployed and maintained the Chrome extension, showcasing strong project management skills.",
      "Tools Used: Laugh API, Chrome extension developer.",
    ],
  },
  {
    title: "Control of UAVs",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Undergoing final year project Under Professor Dr. Jayati Dey.",
      "Path Planning of UAVs using Bug Algorithm and A* Algorithm.",
      "Path Controlling of UAVs using PID Control and Sliding Model Control.",
      "Tools Used: Bug Algorithm, A* Algorithm, MATLAB.",
    ],
  },
  {
    title: "Check Weather",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "Created a website to check the weather forcast of a given location/city.",
      "Weather details comprises of temperature, humidity, and wind speed of the desired city.",
      "Implemented responsive design, user-friendly and seamless functionality across all devices.",
      "Tools Used: HTML, CSS, JavaScript, OpenWeatherApp API.",
    ],
  },
  {
    title: "Learn WebD",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Craeted and designed a website when undergoing the process of learning frontend development.",
      "The website consists of basic ideas for learning web development and reading articles about frontend tools.",
      "Also use the concept of bootstrap 5 for better response and user-friendly environment.",
      "Tools Used: HTML, CSS, Bootstrap 5.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };