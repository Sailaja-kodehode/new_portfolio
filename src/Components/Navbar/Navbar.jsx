import { useState, useEffect } from "react";
import Theme from "./Theme";
import "./navBar.css";

import { FaHome } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineBrightness7 } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import Image from "./../Assets/Profile/logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  useEffect(() => {
    window.innerWidth <= 600 && setNavbar(false);
    window.addEventListener("", () => {
      window.innerWidth <= 600 && setNavbar(false);
    });
    return () =>
      window.removeEventListener("", () => {
        window.innerWidth <= 600 && setNavbar(false);
      });
  }, []);

  return (
    <div className="nav_container">
      <a href="index.html" className="nav_logo">
        <img className="nav_logo" src={Image} alt="pic" />
      </a>
      <div>
        {" "}
        <Theme />
      </div>

      <nav className="nav">
        <ul className="nav_ul">
          {navbar && (
            <li className="nav_ul_li">
              <a className="nav_ul_li_a" href="#home">
                <FaHome />
                Hjem
              </a>
            </li>
          )}
          {navbar && (
            <li className="nav_ul_li">
              <a className="nav_ul_li_a" href="#about">
                <BsPerson />
                Om Meg
              </a>
            </li>
          )}
          {navbar && (
            <li className="nav_ul_li">
              <a className="nav_ul_li_a" href="#skills">
                <BsBriefcaseFill />
                Ferdigheter
              </a>
            </li>
          )}
          {navbar && (
            <li className="nav_ul_li">
              <a className="nav_ul_li_a" href="#projects">
                <MdOutlineBrightness7 />
                Prosjekter
              </a>
            </li>
          )}
          {navbar && (
            <li className="nav_ul_li">
              <a href="#contact" className="nav_ul_li_a">
                <BsTelephoneInbound />
                Kontakt
              </a>
            </li>
          )}

          <li
            className="toggle"
            onClick={() => setNavbar((prevState) => !prevState)}
          >
            <FaHamburger className="toggle" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
