import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./App.scss";

import arrow from "./images/arrow-right.svg";
import boyImg from "./images/boy.webp";
import girlImg from "./images/girl.webp";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  const tl = gsap.timeline({delay: .8});

  useEffect(() => {
    const girl = images.firstElementChild;
    const boy = images.lastElementChild;

    const firstHeadline = content.children[0].children[0];
    const secondHeadline = firstHeadline.nextSibling;
    const thirdHeadline = secondHeadline.nextSibling;
    const contentP = content.children[1];
    const contentBtn = content.children[2];    

    gsap.to(app, 0, { css: { visibility: "visible" } }); // Show elements after they've been loaded
    // Animate images
    tl.from(girl, 1.2, { y: 1280 }, "Start")
      .from(girl.firstElementChild, 2, { scale: 1.6, ease: "power3.out" }, 0.2)
      .from(boy, 1.2, { y: 1280 }, 0.2)
      .from(boy.firstElementChild, 2, { scale: 1.6, ease: "power3.out" }, 0.2);

    tl.staggerFrom(
      [firstHeadline.children, secondHeadline.children, thirdHeadline.children],
      1,
      { y: 44, delay: 0.8 },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0}, 1.4)
      .from(contentBtn, 1, { y: 20, opacity: 0}, 1.6)
      .to(app, 0, {css: {overflow: 'auto'}});
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit ullam animi nobis molestiae eum perspiciatis dolorem
                aliquam, quis provident minima!
              </p>
              <div className="btn-row">
                <button className="explore-btn">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => (images = el)}>
              <div className="hero-image girl">
                <img src={girlImg} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={boyImg} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
