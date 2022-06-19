import React, { createContext, useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Feedback from "./components/Feedback/Feedback";
import Testimonial from "./components/Testimonial/Testimonial";
import Services from "./components/services/Services";
import Video from "./components/video/Video";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Subscription from "./components/subscription/Subscription";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ReactSwitch from "react-switch";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <NavbarMobile toggleTheme={toggleTheme} theme={theme} />
      <Home toggleTheme={toggleTheme} theme={theme} />

      <div className="main-app" id={theme}>
        {/* <Navbar toggleTheme={toggleTheme} theme={theme} />
      <NavbarMobile />
      <Home toggleTheme={toggleTheme} theme={theme}/> */}

        <About />
        <Services />

        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Feedback />
        <Contact />
      </div>
      <Subscription />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c", }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
