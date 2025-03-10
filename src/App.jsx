import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-white dark:bg-cyan-800 text-cyan-900 dark:text-white ">
      <Navbar />
      <div className="">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
