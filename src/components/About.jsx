import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about__card bg"></div>
        <div className="about__card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about__title">About Me</h1>
        <p className="about__sub">College Student Who Loves to Learn</p>
        <p className="about__desc">
          I'm currently studying Electronics and Instrumentation at Gadjah Mada University. I learn
          front end development based on mere curiosity, but then I realize that I enjoy coding and
          designing website and here I am.
        </p>
      </div>
    </div>
  );
};

export default About;
