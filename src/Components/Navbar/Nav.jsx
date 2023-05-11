import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { Component } from "react";
import { MdOutlineBrightness7 } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import Image from "./../Assets/Profile/logo1.png";
import Theme from "./Theme";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="nav_container">
          <a href="index.html" onClick={this.handleClick}></a>
          <div>
            <Theme />
          </div>

          <a href="index.html" className="nav_logo">
            <img className="nav_logo" src={Image} alt="pic" />
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="nav_ul_li">
                <a
                  className="active"
                  href="index.html#home"
                  onClick={this.handleClick}
                >
                  <FaHome />
                  Home
                </a>
              </li>
              <li className="nav_ul_li">
                <a href="#about" onClick={this.handleClick}>
                  <BsPerson />
                  Om Meg
                </a>
              </li>
              <li className="nav_ul_li">
                <a href="#projects" onClick={this.handleClick}>
                  {" "}
                  <MdOutlineBrightness7 />
                  Prosjekter
                </a>
              </li>
              <li className="nav_ul_li">
                <a href="#contact" onClick={this.handleClick}>
                  <BsTelephoneInbound />
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div id="toggle" onClick={this.handleClick}>
            <i id="bar" className={this.handleClick}>
              <GiHamburgerMenu />
            </i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
