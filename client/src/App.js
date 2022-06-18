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
import ScrollToTop from "react-scroll-up"

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <NavbarMobile />
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

      <ScrollToTop showUnder={160} topPosition={1}>
        <span>UP</span>
      </ScrollToTop>
    </ThemeContext.Provider>
  );
};

export default App;
