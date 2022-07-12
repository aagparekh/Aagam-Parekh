import React from 'react'
import { useLocation } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {
  const location = useLocation();
  // console.log(location.hash);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark mx-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Aagam Parekh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbar-center">
        <li className="nav-item">
          <a className={`nav-link ${location.hash==="#about"?"active":""}`}  aria-current="page" href="#about">About Me</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link ${location.hash==="#education"?"active":""}`} aria-current="page" href="#education">Education</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link ${location.hash==="#projects"?"active":""}`} aria-current="page" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link ${location.hash==="#skills"?"active":""}`} aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link ${location.hash==="#interests"?"active":""}`} aria-current="page" href="#interests">Interests</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link ${location.hash==="#contact"?"active":""}`} aria-current="page" href="#contact">Find Me</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
