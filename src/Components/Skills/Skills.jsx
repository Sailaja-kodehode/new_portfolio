import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import "./skills.css";
const Skills = () => {
  return (
    <section className="skills_section" id="skills">
      <h2 className="section_title">Ferdigheter</h2>
      <div className="skills_container">
        <section className="skills_group">
          <ul className="skills_group_frontend">
            <h3 className="skills_title">Frontend </h3>
            <li className="skills_name">
              <FaHtml5 /> HTML5
            </li>
            <li className="skills_name">
              <FaCss3 /> CSS
            </li>
            <li className="skills_name">
              <SiJavascript /> Java Script
            </li>
            <li className="skills_name">
              <FaFigma /> Figma
            </li>
            <li className="skills_name">
              <FaReact /> React
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section className="skills_group">
          <ul className="skills_group_backend">
            <h3 className="skills_title">Backend</h3>
            <li className="skills_name_backend">
              <AiOutlineConsoleSql /> SQL
            </li>
            <li className="skills_name_backend">
              <FaNodeJs /> Node JS express
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};
export default Skills;
