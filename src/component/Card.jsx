import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from "../asserts/portfolio.png";
import Delightio from "../asserts/Delightio.png";
import Techstore from "../asserts/tech-store.png";
import "../style/card.css";

export default function Card() {
  return (
    <section className='cards'>
      <div className="outcard">
        <article className="product-card" aria-label="jhj">
        <div className="product-image">
          <img src={portfolio} alt="" />
        </div>

        <div className="product-content">
          <h3 className="product-title" title="">Portfolio</h3>
        </div>
        <div className="product-content">
          <span className="badge" title="">React js</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://portfolio-rosy-seven-75.vercel.app/', '_blank')}
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://github.com/Ayushkumar12/Portfolio', '_blank')}
          >
            Code Repository
          </button>
        </div>
      </article>
      </div>
      <div className="outcard">
        <article className="product-card" aria-label="jhj">
        <div className="product-image">
          <img src={Delightio} alt="" />
        </div>

        <div className="product-content">
          <h3 className="product-title" title="">Delightio</h3>
        </div>
        <div className="product-content">
          <span className="badge" title="">React js</span>
          <span className="badge" title="">Node Js</span>
          <span className="badge" title="">Express JS</span>
          <span className="badge" title="">Firebase</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label="de"
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label="de"
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Code Repository
          </button>

        </div>
      </article>
      </div>
      <div className="outcard">
        <article className="product-card" aria-label="jhj">
        <div className="product-image">
          <img src={Techstore} alt="" />
        </div>

        <div className="product-content">
          <h3 className="product-title" title="">Tech Store</h3>
          </div>
        <div className="product-content">
          <span className="badge" title="">React js</span>
          <span className="badge" title="">Express js</span>
          <span className="badge" title="">Node js</span>
          <span className="badge" title="">Firbase</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Code Repository
          </button>
        </div>
      </article>
      </div>
      <div className="outcard">
        <article className="product-card" aria-label="jhj">
        <div className="product-image">
          <img src={portfolio} alt="" />
        </div>

        <div className="product-content">
          <h3 className="product-title" title="">Portfolio Site</h3>
          </div>
        <div className="product-content">
          <span className="badge" title="">React js</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
            onClick={() => window.open('https://github.com/Ayushkumar12/Delightio', '_blank')}
          >
            Code Repository
          </button>
        </div>
      </article>
      </div>
    </section>
  );
}
