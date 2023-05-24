import React, { useState, useEffect } from "react";
import "./styles/carousel.css";
import Image from "./assets/image.png";

function Carousel() {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevCard) => (prevCard === 5 ? 1 : prevCard + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel_container">
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s1"
        checked={activeCard === 1}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s2"
        checked={activeCard === 2}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s3"
        checked={activeCard === 3}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s4"
        checked={activeCard === 4}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s5"
        checked={activeCard === 5}
      />

      <div className="cards">
        <label htmlFor="s1" id="slide1">
          <div className="card">
            <div className="image">
              <img src={Image} alt="phone_image" />
            </div>
          </div>
        </label>
        <label htmlFor="s2" id="slide2">
          <div className="card">
            <div className="image">
              <img src={Image} alt="phone_image" />
            </div>
          </div>
        </label>
        <label htmlFor="s3" id="slide3">
          <div className="card">
            <div className="image">
              <img src={Image} alt="phone_image" />
            </div>
          </div>
        </label>
        <label htmlFor="s4" id="slide4">
          <div className="card">
            <div className="image">
              <img src={Image} alt="phone_image" />
            </div>
          </div>
        </label>
        <label htmlFor="s5" id="slide5">
          <div className="card">
            <div className="image">
              <img src={Image} alt="phone_image" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Carousel;
