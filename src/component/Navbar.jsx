import React from 'react';
import '../style/navbar.css'
import home from "../asserts/icon/home.webp";
import skill from "../asserts/icon/skill.webp";
import project from "../asserts/icon/project.webp";
import chat from "../asserts/icon/chat.webp";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="body">
        <nav id="navbar" data-aos="fade-left" >
          <ul>
              <li><Link to={'/'}><img src={home} alt="home" />
              <h4>Home</h4></Link></li>
              <li><Link to={'/Projects'}><img src={project} alt="Project" />
              <h4>Projects</h4></Link></li>
              <li><Link to={'/Skill'}><img src={skill} alt="Skill" />
              <h4>Skills</h4></Link></li>
              <li><Link to={'/Contact'}><img src={chat} alt="Contact" />
              <h4>Contact</h4></Link></li>
          </ul>
      </nav>
    </div>
  );
}
