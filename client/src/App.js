import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Feedback from "./components/Feedback/Feedback";
import Testimonial from "./components/Testimonial/Testimonial";
import Services from "./components/services/Services";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />

      <Home />
      <About />
      <Career />
      <Services/>
      <Feedback />
    </React.Fragment>
  );
};

export default App;
