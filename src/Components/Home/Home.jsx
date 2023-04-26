// Imports
import React from "react";
import photo from "./../Assets/Profile/img1.jpg";
import cv from "./../Assets/CV/Sailaja_CV_Feb_2023.pdf";
import "./home.css";
import "../About/about.css";

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
          <h2 className="home_subtitle">Junior frontend utvikler</h2>
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
      <section className="about" id="about">
        <div className="about_container">
          {/* a small description about my self */}
          <h1 className="about_container_title">Om meg</h1>
          <div className="about_container_info ">
            Jeg er en kreativ frontend utvikler, og jeg er veldig lidenskapelig
            og dedikert i arbeidet. Akkurat nå lærer jeg frontend-utviklig på
            kodehode. Jeg synes faget er veldig spennende, og ser frem til å
            lære. Jeg er en ambisiøs kvinne, frontend utvikling for meg er
            kreativite problemløsning og jeg lidenskapelig for ny teknologi. Jeg
            er interessert i HTML, CSS og design. Jeg har kunnskap om
            JavaScript, React også Backend.
          </div>
        </div>
      </section>
    </header>
  );
}
