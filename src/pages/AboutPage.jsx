// AboutPage.jsx
import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="container">
          <section className="hero">
            <h2>About</h2>
            <p>Discover amazing places and experiences.</p>
            <a href="#" className="btn">Learn More</a>
          </section>
          <section className="features">
            <div className="feature">
              <h3>Feature 1</h3>
              <p>Description of feature 1.</p>
            </div>
            <div className="feature">
              <h3>Feature 2</h3>
              <p>Description of feature 2.</p>
            </div>
            <div className="feature">
              <h3>Feature 3</h3>
              <p>Description of feature 3.</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default AboutPage;


