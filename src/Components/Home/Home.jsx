// Imports
import React from "react";
import photo from "./../Assets/Profile/img4.png";
import html from "./../Assets/Gallery/Skills/html-5.png";
import css from "./../Assets/Gallery/Skills/css-3.png";
import js from "./../Assets/Gallery/Skills/java-script.png";
import react from "./../Assets/Gallery/Skills/science.png";
import figma from "./../Assets/Gallery/Skills/figma.png";
import node from "./../Assets/Gallery/Skills/nodejs.png";
import sql from "./../Assets/Gallery/Skills/sql-server.png";
import github from "./../Assets/Gallery/Skills/github (1).png";

import cv from "./../Assets/CV/Sailaja_CV_Feb_2023.pdf";
import "./home.css";

//  Homepage
export default function Home() {
  return (
    // Header
    <header className="home" id="home">
      {/* home container */}
      <div className="home_container">
        {/*  home text container */}
        <div>
          {/* image of home container */}
          <img className="home_container_image" src={photo} alt="my pic" />
        </div>

        <div className="home_container_text">
          <h1 className="home_title">Sailaja</h1>
          <h2 className="home_subtitle">Junior Frontend Utvikler</h2>
          {/* two Buttons to link CV and Contact page */}
          <div className="button-link">
            <button className="home_button">
              <a href="#contact" className="link">
                Hei!!
              </a>
            </button>
            <button className="home_button">
              <a className="link" link={cv} href={cv} target="_blanc">
                Min CV{" "}
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <h2 className="section_title">Ferdigheter</h2> */}

      <section className="skills_container">
        {/* HTML5 */}
        <figure>
          <img className="skills_image" src={html} alt="my pic" />
          <figcaption> HTML5</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={css} alt="my pic" />
          <figcaption> CSS</figcaption>
        </figure>
        <figure>
          <img className="skills_image2" src={js} alt="my pic" />
          <figcaption> Java Script</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={react} alt="my pic" />
          <figcaption> React</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={sql} alt="my pic" />
          <figcaption> Sql</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={node} alt="my pic" />
          <figcaption>Node Js</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={figma} alt="my pic" />
          <figcaption>Figma</figcaption>
        </figure>
        <figure>
          <img className="skills_image" src={github} alt="my pic" />
          <figcaption>Github</figcaption>
        </figure>
      </section>
    </header>
  );
}
