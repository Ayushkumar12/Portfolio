import React from 'react';
import '../style/home.css'
export default function Home() {
  return (
    <main className='background1'>
      <div className="about">
        <div className='title'>
          <h1>About</h1>
      </div>
        <p>
        I am Ayush Kumar, a passionate web developer with a strong foundation in HTML, CSS, and React JS. During my studies, I honed my skills in front-end development, building interactive websites and web applications using the latest React.js technologies. I am adept at collaborating with teams to create user-friendly, responsive designs that deliver an optimal experience across devices.
        </p>
        <button>Download CV</button>
      </div>
      <div className="skill">
        <div className='title'>
          <h1>Skills</h1>
        </div>
        <ul>
          <li >
            <h2>React JS</h2>
            <p>
              React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. 
              It is maintained by Meta and a community of individual developers and companies.
            </p>
          </li>
          <li >
            <h2>Mongo DB</h2>
            <p>
              MongoDB is a source-available, cross-platform, document-oriented database program. 
              Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
            </p>
          </li>
          <li >
            <h2>HTML5</h2>
            <p>
              Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. 
              It defines the content and structure of web content.
            </p>
          </li>
          <li >
            <h2>CSS</h2>
            <p>
              Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
