import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer_list">
        <li className="footer_list_item">
          <a
            className="footer_list_item_link"
            href="https://github.com/Sailaja-kodehode/"
            target="_blanc"
          >
            <BsGithub /> github
          </a>
        </li>
        <hr />
        <li className="footer_list_item">
          <a
            className="footer_list_item_link"
            href="https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=0%3A1&t=BIhjY9yJN2IHEEK8-0"
            target="_blanc"
          >
            <FaFigma /> FigmaFiles
          </a>
        </li>
        <hr />
        <li className="footer_list_item">
          <a
            className="footer_list_item_link"
            href="https://www.linkedin.com/"
            target="_blanc"
          >
            <ImLinkedin />
            sailaja-posupulate
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
