import React from "react";
import { Helmet } from "react-helmet";
import "../style/contact.css";

export default function Contact() {
  return (
    <div className="background1" data-aos="fade-up">
      <Helmet>
        <meta name="title" content="Ayush | Contact Us" />

        <meta property="og:title" content="Ayush | Contact Us"/>

        <meta name="robots" content="index, follow" />

        <meta name="url" content="https://ayush-portfolio.rf.gd/Contact " />

        <meta name="identifier-url" content="https://ayush-portfolio.rf.gd/Contact " />

        <meta name="revisit-after" content="1 days" />

        <meta name="googlebot" content="index, follow" />

        <meta name="bingbot" content="index, follow" />
      </Helmet>
      <section className="form">
        <h2>Contact Us</h2>
        <form className="form-group">
          <div className="in">
            <input
              type="text"
              placeholder="Enter your firstname"
              name="fname"
              className="input2"
            />
            <input
              type="text"
              placeholder="Enter your lastname"
              name="lname"
              className="input2"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="message"
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
