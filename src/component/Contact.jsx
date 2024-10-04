import React from 'react';
import '../style/contact.css'

export default function Contact() {
  return (
    <div className='background1'>
      <section className='form'>
        <h2>Contact Us</h2>
        <form className='form-group'>
          <div className='in'>
            <input type='text' placeholder='Enter your firstname' name='fname' className='input2' />
            <input type='text' placeholder='Enter your lastname' name='lname' className='input2'/>
          </div>
          <input type='email' placeholder='Enter your email' name='email' className='input'/>
          <textarea name='message' placeholder='Enter your message' className='message'/>
          <button type='submit' value='Submit' >Submit</button>
        </form>
        </section>
    </div>
  );
}
