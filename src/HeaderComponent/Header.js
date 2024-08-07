import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
function Header() {
  return (
    <div className="App-header">
      <div className='App-header__left'>
        <h1>Yasar<span>Devloper</span></h1>
      </div>
      <div className='App-header__right'>
        <Link to="about" smooth={true} duration={500}>
          <h4>About</h4>
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="Project" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="more" smooth={true} duration={500}>
          <h4>Known More</h4>
        </Link>
        <Link to="contact us" smooth={true} duration={500}>
          <h4>Contact Us</h4>
        </Link>
        <button>Join With me</button>
      </div>
    </div>
  )
}

export default Header;