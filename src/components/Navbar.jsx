import React from "react";
import DarkTheme from "../hooks/DarkTheme";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-4 backdrop-blur-md z-50 bg-white/80 dark:bg-gray-900/80 transition-all duration-300">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div>
          <h1 className="text-2xl font-bold border-l-4 border-t-4 border-cyan-900 dark:border-white pl-4 animate-slide-in-left">
            Portfolio
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
            Full-Stack Developer
          </p>
        </div>
        <div className="flex items-center space-x-10 font-semibold">
          <a
            href="#home"
            className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
          >
            HOME
          </a>
          <a
            href="#projects"
            className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
          >
            CONTACT
          </a>
          <DarkTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar; // import React from "react";
// import DarkTheme from "../hooks/DarkTheme";
// const Navbar = () => {
//   return (
//     <div className="fixed top-0 w-full p-4 backdrop-blur-md  ">
//       <div className="flex justify-between items-center mx-auto max-w-6xl">
//         <h1 className="text-2xl font-bold border-l-4 border-l-cyan-900 dark:border-l-white pl-4 border-t-cyan-900 dark:border-t-white border-t-4">
//           Portfolio
//         </h1>
//         <div className=""></div>
//         <div className="space-x-10 font-semibold p-4 hover:backdrop-blur-lg">
//           <a
//             href="#home"
//             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
//           >
//             HOME
//           </a>
//           <a
//             href="#projects"
//             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
//           >
//             PROJECTS
//           </a>
//           <a
//             href="#contact"
//             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
//           >
//             CONTACT
//           </a>
//           <DarkTheme />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
