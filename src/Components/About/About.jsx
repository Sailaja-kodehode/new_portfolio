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
        {/* Title */}
        <h1 className="about_container_title">Utdanning</h1>

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
          <h2 className="about_container_info_title">Fritid</h2>
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
