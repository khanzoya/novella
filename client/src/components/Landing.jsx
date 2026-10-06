import React from "react";
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className='bg_l'>
      <div id='page1'>
        <h1>Your Own Shelf</h1>
        <img src='images/bookreadin.avif' alt='Book Reading' />
      </div>

      <div id='page2'>
        <h4>Literature Extravaganza Discovered At PSIT.</h4>
        <h1>
          We delve into a world where stories come to life, where imagination
          knows no bounds, and where every page turns into an adventure. This is
          Novella.
        </h1>
        <div id='about-us'>
          <h3>About us</h3>
          <div id='green-effect'>
            <div id='green'></div>
            <img src='./arrow-right.png' alt='hjhjjh' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
