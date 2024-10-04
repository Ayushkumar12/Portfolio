import React from 'react';
import '../style/profile.css'
import Ayush1 from "../asserts/Profile/Ayush1.webp";
import phone from "../asserts/icon/phone.webp";
import email from "../asserts/icon/email.webp";
import linkedin from "../asserts/icon/linkedin.webp";
import insta from "../asserts/icon/instagram.webp";
import git from "../asserts/icon/github.webp";
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <section className='background' data-aos="fade-right">
        <div className='profile'>
            <img src={Ayush1} alt="profile" className='proimg' data-aos="fade-up"/>
            <h1 className='name' data-aos="fade-right">Ayush Kumar</h1>
            <p className='occupation' data-aos="fade-right">Web Developer</p>
            <p className='bio' data-aos="fade-right">
            I am Ayush Kumar, 
            a proficient web developer, specializes in HTML, CSS, and React JS. His strength lies in front-end development, crafting engaging websites and applications using React.js. Ayush works effectively with teams to design user-friendly, responsive interfaces that provide seamless experiences across different devices.
            </p>
            <ul className='skills'data-aos="fade-up">
                <li><Link href="https://github.com/Ayushkumar12"><img src={ git } alt='github'/></Link></li>
                <li><Link href="https://github.com/Ayushkumar12"><img src={ insta } alt='instagram'/></Link></li>
                <li><Link href="https://www.linkedin.com/in/ayush-kumar-3395711b8/"><img src={ linkedin } alt='linkedin'/></Link></li>
            </ul>
        </div>
        <div className="contact" data-aos="fade-up">
            <ul>
                <li><Link><img src={ phone } alt='contact'/>+91 7838945961</Link></li>
                <li><Link><img src={ email } alt='contact'/> ayushk5961@gmail.com</Link></li>
                {/* <li><Link><img src={ email } alt='contact'/> contact </Link></li> */}
            </ul>
        </div>
    </section>
  );
}
