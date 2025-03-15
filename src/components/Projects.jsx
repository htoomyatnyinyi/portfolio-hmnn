import React from "react";
import image2 from "../assets/Plants.png";
import image1 from "../assets/Question.png";
import image3 from "../assets/Learning.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "JobDiary Projects",
      desc: "A real-time analytics dashboard for jobseeker and emploer,and project is under development.",
      image: image1,
      link: "https://novel-project-five.vercel.app/",
      details:
        "Built with React, TailwindCSS, and Reduxtoolkit, ThunkAPI. Features dynamic data visualization and user authentication for both jobseeker and employer.",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      desc: "A portfolio platform with a simple design.",
      image: image2,
      link: "https://portfolio-sable-psi-65.vercel.app/",
      details:
        "Developed using ReactJs and Reduxtoolkit. Includes a custom design and responsive layouts.",
    },
    {
      id: 3,
      title: "Backend for JobDiary",
      desc: "An simpler interface.",
      image: image3,
      link: "https://novel-project-five.vercel.app/",
      details:
        "Created with React, Redux, and Stripe for payments. Supports product filtering and cart management.",
    },
  ];

  return (
    <div
      className="min-h-screen py-8 sm:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      id="projects"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-cyan-900 dark:text-cyan-100 animate-fade-in-down">
        My Projects
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 mb-6 sm:mb-10 animate-fade-in delay-200">
        Here are some of the projects I've built, blending creativity with
        technical expertise. Each one represents a journey through code, design,
        and problem-solving—explore them below!
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-900 dark:text-cyan-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              {project.desc}
            </p>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 transform hover:rotate-2 transition-transform duration-300"
            />
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mb-4">
              {project.details}
            </p>
            <a
              href={project.link}
              className="inline-block px-3 sm:px-4 py-2 bg-cyan-900 dark:bg-white text-white dark:text-cyan-900 text-sm sm:text-base rounded-md hover:bg-cyan-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
