import React from 'react'
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import { Link } from 'react-router-dom';


const Projects = () => {
  return (
    <>
     <section id="project" className="project">
  <div className="heading">top projects</div>
  <div className="box-container mx-auto">
    <div className="box">
      <Link to="#">
        <img src={img1} alt="img" />
      </Link>
    </div>
    <div className="box">
      <Link to="#">
        <img src={img2} alt="img" />
      </Link>
    </div>
    <div className="box">
      <Link to="#">
        <img src={img3} alt="img" />
      </Link>
    </div>
    <div className="box">
      <Link to="#">
        <img src={img4} alt="img" />
      </Link>
    </div>
    <div className="box">
      <Link to="#">
        <img src={img5} alt="img" />
      </Link>
    </div>
    <div className="box">
      <Link to="#">
        <img src={img6} alt="img" />
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default Projects
