import React from 'react';
import './style/layout.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skill from './component/Skill';
import Profile from './component/Profile';
import Contact from './component/Contact';
import { Routes ,Route} from 'react-router-dom';
import Ham from './component/Ham';

function App() {
  return (
    <section className='ba'>
      <Ham/>
      <div  className='layout'>
          <Profile/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Skill' element={< Skill />} />
            <Route path='/Projects' element={< Skill />} />
            <Route path='/Contact' element={< Contact />} />
          </Routes>
          <Navbar/>
      </div>
    </section>
  );
}

export default App;
