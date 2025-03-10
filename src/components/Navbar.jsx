import React, { useState } from "react";
import DarkTheme from "../hooks/DarkTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full p-4 backdrop-blur-md z-50 bg-white/80 dark:bg-gray-900/80 transition-all duration-300">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        {/* Logo/Title Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold border-l-4 border-t-4 border-cyan-900 dark:border-white pl-4 animate-slide-in-left">
            Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
            Full-Stack Developer
          </p>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="sm:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop + Mobile Menu) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-10 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white/90 dark:bg-gray-900/90 sm:bg-transparent dark:sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "animate-slide-in-top" : "animate-slide-out-top"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10 font-semibold text-sm sm:text-base">
            <a
              href="#home"
              className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400 w-full sm:w-auto text-center"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#projects"
              className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400 w-full sm:w-auto text-center"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400 w-full sm:w-auto text-center"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
            <div className="w-full sm:w-auto">
              <DarkTheme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; // import React from "react";
// import DarkTheme from "../hooks/DarkTheme";

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 w-full p-4 backdrop-blur-md z-50 bg-white/80 dark:bg-gray-900/80 transition-all duration-300">
//       <div className="flex justify-between items-center mx-auto max-w-6xl">
//         <div>
//           <h1 className="text-2xl font-bold border-l-4 border-t-4 border-cyan-900 dark:border-white pl-4 animate-slide-in-left">
//             Portfolio
//           </h1>
//           <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
//             Full-Stack Developer
//           </p>
//         </div>
//         <div className="flex items-center space-x-10 font-semibold">
//           <a
//             href="#home"
//             className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
//           >
//             HOME
//           </a>
//           <a
//             href="#projects"
//             className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
//           >
//             PROJECTS
//           </a>
//           <a
//             href="#contact"
//             className="p-2 border-b-4 border-cyan-900 dark:border-white hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
//           >
//             CONTACT
//           </a>
//           <DarkTheme />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar; // import React from "react";
// // import DarkTheme from "../hooks/DarkTheme";
// // const Navbar = () => {
// //   return (
// //     <div className="fixed top-0 w-full p-4 backdrop-blur-md  ">
// //       <div className="flex justify-between items-center mx-auto max-w-6xl">
// //         <h1 className="text-2xl font-bold border-l-4 border-l-cyan-900 dark:border-l-white pl-4 border-t-cyan-900 dark:border-t-white border-t-4">
// //           Portfolio
// //         </h1>
// //         <div className=""></div>
// //         <div className="space-x-10 font-semibold p-4 hover:backdrop-blur-lg">
// //           <a
// //             href="#home"
// //             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
// //           >
// //             HOME
// //           </a>
// //           <a
// //             href="#projects"
// //             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
// //           >
// //             PROJECTS
// //           </a>
// //           <a
// //             href="#contact"
// //             className="p-2 border-b-4 border-b-cyan-900 dark:border-b-white hover:border-b-cyan-400"
// //           >
// //             CONTACT
// //           </a>
// //           <DarkTheme />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;
