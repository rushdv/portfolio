import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SocialDock from "./components/SocialDock";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log("Theme updated to:", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle clicked. Current theme:", theme);
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <Contact theme={theme} />
      </main>
      <SocialDock theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
