// imports
import React from "react";
import "./about.css";
// About component
export default function About() {
  return (
    // Section
    <section className="about" id="about">
      {/* About container */}
      <div className="about_container">
        {/* a small description about my self */}
        <h1 className="about_container_title">Om Meg</h1>
        <div className="about_container_info ">
          Jeg er en kreativ frontend utvikler, og jeg er veldig lidenskapelig og
          dedikert i arbeidet. Akkurat nå lærer jeg frontend-utviklig på
          kodehode. Jeg synes faget er veldig spennende, og ser frem til å lære.
          Jeg er en ambisiøs kvinne, frontend utvikling for meg er kreativite
          problemløsning og jeg lidenskapelig for ny teknologi. Jeg er
          interessert i HTML, CSS og design. Jeg har kunnskap om JavaScript,
          React også Backend.
        </div>
        <hr className="about_container_lineBreak" />
        {/* Title */}
        <h1 className="about_containers_title">Utdanning</h1>

        <div className="about_container_info ">
          {/* Title */}
          Mastergrad I Administrasjon (M.B.A),(Hr,Marketing), Bachelorgrad i
          Computer applikasjoner (B.C.A) (Dataapplikasjoner)
          <h3>Erfaring</h3> 1.5 års erfaring som admin trainee.
          {/* 1.5year of experience as admin trainee */}
        </div>

        {/* break */}
        <hr className="about_container_lineBreak" />
        {/* fritid */}
        <div className="about_container_info">
          {/* Title */}
          <h1 className="about_containers_title">Fritid</h1>
          {/* Paragraph */}
          <p className="about_paragraph">
            Fritid jeg lærer norsk for å forbedre min kommunikasjon med kolleger
            og naboer. Jeg liker å spille badminton, å lese bøker og går på tur
            til liten nærest fjell som ta ca. 1 time. Jeg elsker å være sammen
            med familie og barna mine. Vi leker sammen og synger.
          </p>
        </div>
      </div>
    </section>
  );
}
