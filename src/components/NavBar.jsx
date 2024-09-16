// Navbar.jsx
import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  static defaultProps = {
    siteName: 'MiSitio' // Valor por defecto para el prop
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { siteName } = this.props;

    return (
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link to="/">{siteName}</Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div className="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
