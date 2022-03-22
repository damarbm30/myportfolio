import { React, useContext } from "react";
import { ThemeContext } from "../context";
import "./Intro.css";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left__wrapper">
          <h2 className="intro-header">Hello, My name is</h2>
          <h1 className="intro-name">Damar Buana Murti</h1>
          <div className="intro-title">
            <div className="intro-title__wrapper">
              <div className="intro-title__item">Front-end Developer</div>
              <div className="intro-title__item">Wordpress Developer</div>
              <div className="intro-title__item">Photo Editor</div>
            </div>
          </div>
          <p className="intro-desc">
            I do front end programming using ReactJS and sometimes using WordPress. I enjoy editing
            simple landscape or portrait photos and turn it to a beautiful one.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
          style={{ stroke: darkMode ? "white" : "black" }}
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src="img/man-crop.png" alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
