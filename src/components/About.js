import React from 'react'
import about from '../images/about.jpg';

const About = () => {
  return (
    <>
     <section id="about" className="about container">
  <h1 className="heading">about us</h1>
  <div className="row align-items-center">
    <div className="col-md-6 image">
      <img src={about} width="90%" alt="about" />
    </div>
    <div className="col-md-6 info">
      <h2>the best Interior Designers</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
        reprehenderit sequi enim porro dolor explicabo distinctio voluptates
        exercitationem nam excepturi?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
        voluptatibus sint totam, ea velit eius. Praesentium consequuntur
        sint porro, similique ut corrupti dolorem eligendi. Sunt porro quos
        libero illum quo officia laboriosam quisquam, nam totam?
      </p>
      <div className="icons">
        <a href="https://sahilkarnekar.netlify.app" className="fab fa-facebook-f" target='blank'/>
        <a href="https://www.linkedin.com/in/sahilkarnekar1" className="fab fa-linkedin-in" target='blank'/>
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About
