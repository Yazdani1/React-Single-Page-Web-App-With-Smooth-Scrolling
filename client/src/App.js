import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Feedback from "./components/Feedback/Feedback";
import Testimonial from "./components/Testimonial/Testimonial";
import Services from "./components/services/Services";
import Video from "./components/video/Video";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Subscription from "./components/subscription/Subscription";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
        <Navbar />
        <NavbarMobile />

        <Home />
        <About />
        <Services />

        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Subscription />
        <Feedback />
        <Footer />

        {/* <Contact/> */}

    </React.Fragment>
  );
};

export default App;
