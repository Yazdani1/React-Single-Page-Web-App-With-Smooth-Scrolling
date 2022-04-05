import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Feedback from "./components/Feedback/Feedback";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Career />
      <Feedback />
      <Testimonial />
    </React.Fragment>
  );
};

export default App;
