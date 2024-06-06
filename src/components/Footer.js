import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="container-fluid footer">
  <div className="row">
    <div className="col-md-3">
      <h2>Home Makers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
        rerum facilis, deserunt ea commodi sed voluptatum beatae accusamus
        nisi pariatur.
      </p>
    </div>
    <div className="col-md-3">
      <h2>we are in</h2>
      <div className="list">
        <Link to="#">india</Link>
        <Link to="#">usa</Link>
        <Link to="#">japan</Link>
        <Link to="#">canada</Link>
        <Link to="#">germany</Link>
      </div>
    </div>
    <div className="col-md-3">
      <h2>follow us</h2>
      <div className="list">
        <Link to="#">facebook</Link>
        <Link to="#">linkedIn</Link>
        <Link to="#">twitter</Link>
        <Link to="#">instagram</Link>
      </div>
    </div>
    <div className="col-md-3 text-center text-md-left letter">
      <h2>newsletter</h2>
      <p>subscribe for latest updates</p>
      <input type="email" placeholder="enter your email" />
      <input type="submit" placeholder="subscribe" />
    </div>
  </div>
  <h1 className="credit">
    created by <span>Home Makers</span> | all rights reserved.
  </h1>
</section>

    </>
  )
}

export default Footer
