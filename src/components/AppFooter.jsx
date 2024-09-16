// AppFooter.jsx
import React, { Component } from 'react';
import './AppFooter.css';

class AppFooter extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eget lorem.</p>
            </div>
            <div class="footer-section">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h2>Contact Us</h2>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div class="footer-section">
              <h2>Follow Us</h2>
              <a href="#" class="social-icon">FB</a>
              <a href="#" class="social-icon">TW</a>
              <a href="#" class="social-icon">IG</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;


