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
import cv from "./../Assets/CV/Sailaja_CV_03.2023.docx";
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
              <a
                href="
#contact"
                className="link"
                target="_blanc"
              >
                Kontakt
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
        <div>
          <img className="skills_image" src={html} alt="my pic" />
          <p> HTML5</p>
        </div>
        <div>
          <img className="skills_image" src={css} alt="my pic" />
          <p className="sql"> CSS</p>
        </div>
        <div>
          <img className="skills_image" src={js} alt="my pic" />
          <p className="java"> Java Script</p>
        </div>
        <div>
          <img className="skills_image" src={react} alt="my pic" />
          <p className="sql"> React</p>
        </div>
        <div>
          <img className="skills_image" src={sql} alt="my pic" />
          <p className="sql"> Sql</p>
        </div>
        <div>
          <img className="skills_image" src={node} alt="my pic" />
          <p>Node Js</p>
        </div>
        <div>
          <img className="skills_image" src={figma} alt="my pic" />
          <p>Figma</p>
        </div>
        <div>
          <img className="skills_image" src={github} alt="my pic" />
          <p>Github</p>
        </div>
      </section>
    </header>
  );
}
