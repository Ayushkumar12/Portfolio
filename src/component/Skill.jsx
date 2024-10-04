import React from 'react';
import '../style/skill.css'
import html from "../asserts/icon/html.webp";
import css from "../asserts/icon/css.webp";
import Javascript from "../asserts/icon/Javascript.webp";
import python from "../asserts/icon/python.webp";
import SQL from "../asserts/icon/sql.webp";
import git from "../asserts/icon/git.webp";
import react from "../logo.svg";
export default function Skill() {
  return (
    <div className='background1'>
        <div className='top'>
          <h1>Technical Skills</h1>
        </div>

        <div className='skills-wrapper'>
          <div className='skills-item'>
            <div>
              <img src={html} alt='html' className='skill-img'></img>
            </div>
            <h3>HTML</h3>
          </div>
          <div className='skills-item'>
            <div>
              <img src={css} alt='css' className='skill-img'></img>
            </div>
            <h3>CSS</h3>
          </div>
          <div className='skills-item'>
            <div>
              <img src={Javascript} alt='Javascript' className='skill-img'></img>
            </div>
            <h3>Javascript</h3>
          </div>
          <div className='skills-item'>
            <div>
              <img src={react} alt='react' className='skill-img'></img>
            </div>
            <h3>Reactjs</h3>
          </div>
          <div className='skills-item'>
            <div>
              <img src={python} alt='python' className='skill-img'></img>
            </div>
            <h3>python</h3>
          </div>
          <div className='skills-item'>
            <div>
              <img src={SQL} alt='SQL' className='skill-img'></img>
            </div>
            <h3>SQL</h3>
          </div>
        </div>
        <div className='top'>
          <h1>Other Skills</h1>
        </div>

        <div className='skills-wrapper'>
          <div className='skills-item'>
            <div>
              <img src={git} alt='git' className='skill-img'></img>
            </div>
            <h3>GIt</h3>
          </div>
        </div>
    </div>
  );
}
