import React from 'react'
import '../css/Contact.css'

const Contact = () => {
  return (
    <div>
       <h2>Contact Us - Novella Your Own Shelf</h2>

      <form
        action="mailto:khanhumaira1311@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="genre">Preferred Genre:</label>
        <select id="genre" name="genre">
          <option value="fantasy">Fantasy</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="drama">Drama</option>
        </select>

        <label for="message">Your Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <div></div>
      <h3>Get in Touch With us!!!</h3>
      <footer class="container-fluid m-5 p-2rounded mx-auto bg-light shadow">
        <div class="footer">
          
        </div>
        <div class="footer-Text-area">
          Last updated:April 9th,2023<br />
          webmaster:Team Novella<br />
          &copy; copyright 2023 Novella
        </div>
      </footer>
    </div>
  )
}

export default Contact
