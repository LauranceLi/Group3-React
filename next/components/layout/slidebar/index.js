import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slidebar = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // 这里可以放任何仅在客户端执行的代码
    }
  }, []);

  return (
    <div className="Slidebar d-flex align-items-center justify-content-between">
      <div className="closeIcon">
        <i className="ti-close" aria-hidden="true"></i>
      </div>
      <div className="logo-area">
        <Link to="/">締杉旅遊</Link>
      </div>
      <div className="sonarNav">
        <nav>
          <ul>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/elements">Elements</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copywrite-text">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved | This template is made with
          <i className="fa fa-heart-o" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
        </p>
      </div>
    </div>
  );
};

export default Slidebar;
