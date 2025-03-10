import React from "react";
import image2 from "../assets/Plants.png";
import image1 from "../assets/Question.png";
import image3 from "../assets/Learning.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Galactic Dashboard",
      desc: "A real-time analytics dashboard with a cosmic UI.",
      image: image1,
      link: "#",
      details:
        "Built with React, TailwindCSS, and Chart.js. Features dynamic data visualization and user authentication.",
    },
    {
      id: 2,
      title: "Orbiting Blog",
      desc: "A blog platform with a space-inspired design.",
      image: image2,
      link: "#",
      details:
        "Developed using Next.js and Markdown. Includes a custom CMS and responsive layouts.",
    },
    {
      id: 3,
      title: "Stellar E-Commerce",
      desc: "An online store with a sleek, modern interface.",
      image: image3,
      link: "#",
      details:
        "Created with React, Redux, and Stripe for payments. Supports product filtering and cart management.",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-900 dark:text-cyan-100 animate-fade-in-down">
        My Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in delay-200">
        Here are some of the projects I've built, blending creativity with
        technical expertise. Each one represents a journey through code, design,
        and problem-solving—explore them below!
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          >
            <h3 className="text-2xl font-semibold text-cyan-900 dark:text-cyan-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.desc}
            </p>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 transform hover:rotate-2 transition-transform duration-300"
            />
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              {project.details}
            </p>
            <a
              href={project.link}
              className="inline-block px-4 py-2 bg-cyan-900 dark:bg-white text-white dark:text-cyan-900 rounded-md hover:bg-cyan-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; // import React from "react";
// import image2 from "../assets/Plants.png";
// import image1 from "../assets/Question.png";
// import image3 from "../assets/Learning.png";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Galactic Dashboard",
//       desc: "A real-time analytics dashboard with a cosmic UI.",
//       image: image1,
//       link: "#",
//       details:
//         "Built with React, TailwindCSS, and Chart.js. Features dynamic data visualization and user authentication.",
//     },
//     {
//       id: 2,
//       title: "Orbiting Blog",
//       desc: "A blog platform with a space-inspired design.",
//       image: image2,
//       link: "#",
//       details:
//         "Developed using Next.js and Markdown. Includes a custom CMS and responsive layouts.",
//     },
//     {
//       id: 3,
//       title: "Stellar E-Commerce",
//       desc: "An online store with a sleek, modern interface.",
//       image: image3,
//       link: "#",
//       details:
//         "Created with React, Redux, and Stripe for payments. Supports product filtering and cart management.",
//     },
//   ];
//   return (
//     <div className="h-screen" id="projects">
//       <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div className="mx-auto grid grid-cols-1">
//             <h3 className="text-2xl font-semibold ">{project.title}</h3>
//             <p className="mt-2">{project.desc}</p>
//             <img src={project.image} alt="" />
//             <p className="">{project.details}</p>
//             <a
//               href={project.link}
//               className="p-2 bg-cyan-900 dark:bg-white text-white dark:text-cyan-900 underline-offset-4"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
