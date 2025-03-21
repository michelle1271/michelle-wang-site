import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/about">about me</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;