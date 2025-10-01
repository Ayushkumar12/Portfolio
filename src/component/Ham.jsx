import React, { useState } from "react";
import "../style/ham.css";
import home from "../asserts/icon/home.webp";
import skill from "../asserts/icon/skill.webp";
import project from "../asserts/icon/project.webp";
import chat from "../asserts/icon/chat.webp";
import { Link } from "react-router-dom";

export default function Ham() {
  const [isOpen, setIsOpen] = useState(false);
  const [isham, setIsham] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsham(!isham);
  };
  const handleclose=()=>{
    setIsOpen(false);
    setIsham(false);
  }

  return (
    <nav className="mobnav">
      <div className="hamburger" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div id="navbar1" className={isOpen ? "open" : "close"}>
        <ul>
          <li>
            <Link to={"/"} onClick={handleclose}>
              <img src={home} alt="home" />
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link to={"/Projects"} onClick={handleclose}>
              <img src={project} alt="Project" />
              <h4>Projects</h4>
            </Link>
          </li>
          <li>
            <Link to={"/Skill"}  onClick={handleclose}>
              <img src={skill} alt="Skill" />
              <h4>Skills</h4>
            </Link>
          </li>
          <li>
            <Link to={"/Contact"} onClick={handleclose} >
              <img src={chat} alt="Contact" />
              <h4>Contact</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
