import React from 'react';
import './App.scss';
import arrow from './images/arrow-right.svg'
import boyImg from './images/boy.webp'
import girlImg from './images/girl.webp'

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam animi nobis molestiae eum perspiciatis dolorem aliquam, quis provident minima!</p>
              <div className="btn-row">
                <button className="explore-btn">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner">
              <div className="hero-image girl">
                <img src={girlImg} alt="girl"/>
              </div>
              <div className="hero-image boy">
                <img src={boyImg} alt="boy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
