import React, { useState } from 'react';
import '../style/ham.css';
import home from "../asserts/icon/home.webp";
import skill from "../asserts/icon/skill.webp";
import project from "../asserts/icon/project.webp";
import chat from "../asserts/icon/chat.webp";

export default function Ham() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mobnav'>
      <div className='hamburger' onClick={handleToggle}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div id='navbar1' className={isOpen? 'open' : 'close'}>
        <ul>
          
          <li><a href='/'><img src={home} alt='home' />Home</a></li>
          <li><a href='skills'><img src={skill} alt='skills' />Skills</a></li>
          <li><a href='projects'><img src={project} alt='projects' />Projects</a></li>
          <li><a href='chat'><img src={chat} alt='chat' />Chat</a></li>
          <li><a href='contact'><button className='contact-btn'>Contact</button></a></li>
        </ul>
      </div>
    </nav>
  );
}