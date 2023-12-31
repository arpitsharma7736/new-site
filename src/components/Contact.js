import React from 'react'

function Contact() {
  return (
    <>
     <section class="content">
        <h2 className='con-head'>Contact Us</h2>
        <div style={{'height':'30px'}}></div>
        <p>If you have any questions or would like to get in touch with us, please fill out the contact form below:</p>
        
        <form id="contactForm" method="post" action="save_contact.php">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit" name="submit" style={{'width':'100%'}}>Submit</button>
        </form>
    </section>
    <div style={{'width':'100%', 'height':'80px' }}></div>
    </>
  )
}

export default Contact