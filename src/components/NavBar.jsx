

// Navbar.js
import React, { Component } from 'react';
import './NavBar.css';

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
        <nav class="navbar">
          <div class="container">
            <div class="logo">
              <a href="/">{siteName}</a>
            </div>
            <ul class="nav-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <div class="menu-toggle">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
