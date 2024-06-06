import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fs-2">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary font-weight-bold fs-1" to="/">Home Makers</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <Link
                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                aria-current="page"
                to="/"
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={() => handleLinkClick('/about')}
              >
                About
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}
                to="/services"
                onClick={() => handleLinkClick('/services')}
              >
                Services
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
                to="/projects"
                onClick={() => handleLinkClick('/projects')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
