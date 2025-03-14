import { useEffect, useState } from "react";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

const DarkTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference on initial load
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      // className="p-2 dark:bg-white bg-cyan-900 text-white dark:text-cyan-900"
    >
      {/* {console.log(theme, "click")} */}
      {/* Toggle Theme
       */}
      {theme ? <AiFillMoon /> : <AiFillSun />}
    </button>
  );
};

export default DarkTheme;
