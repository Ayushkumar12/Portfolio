import React from 'react';
import "../style/card.css";

export default function Card() {
  return (
    <section className='cards'>
        <div className='outcard'>
            <h2>Portfolio website</h2>
            <a href='http://www.ayush-portfolio.rf.gd/
    '>visit site</a>
            <a href='https://github.com/Ayushkumar12/portfolio'>code</a>
        </div>
        <div className='outcard'>
            <h2>E-commerce website</h2>
            <a href='https://ayushkumar12.github.io/quickstore/
    '>visit site</a>
            <a href='https://github.com/Ayushkumar12/quickstore'>code</a>
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
