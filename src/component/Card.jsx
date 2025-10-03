import React from 'react';
import portfolio from "../asserts/portfolio.png";
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
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
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
          <h3 className="product-title" title="">Delightio</h3>
        </div>
        <div className="product-content">
          <span className="badge" title="">React js</span>
          <span className="badge" title="">Node Js</span>
          <span className="badge" title="">Express JS</span>
        </div>

        <div className="product-footer">
          <a href='https://delightio.vercel.app/'
            target='blank'
            className="add-btn"
          >
            Visit Site
          </a>
          <a href='https://github.com/Ayushkumar12/Delightio'
            target='blank'
            className="add-btn"
          >
            Code Repository
          </a>
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
          <span className="badge" title="">React js</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label='de'
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
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
          <span className="badge" title="">React js</span>
        </div>

        <div className="product-footer">
          <button
            className="add-btn"
            type="button"
            aria-label='de'
          >
            Visit Site
          </button>
          <button
            className="add-btn"
            type="button"
            aria-label='de'
          >
            Code Repository
          </button>
        </div>
      </article>
      </div>
      
      <div className='outcard'>
        <h2>Restorent menu website</h2>
        <a href='https://menu-omega-three.vercel.app/
    '>visit site</a>
        <a href='https://github.com/Ayushkumar12/menu'>code</a>
      </div>
    </section>
  );
}
