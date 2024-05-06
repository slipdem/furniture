import React, { useState } from "react";
import classNames from "classnames";
import furniture1 from "../../assets/1.png";
import furniture2 from "../../assets/2.png";
import furniture3 from "../../assets/3.png";

interface ICarousel {
  img: string; 
}

const Slider: React.FC = () => {
  const [items, setItems] = useState<ICarousel[]>([
    { img: furniture1 },
    { img: furniture2 },
    { img: furniture3 },
  ]);

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
          <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={index}
              className={classNames("carousel-item", { active: index === 1 })}
            >
              <img src={item.img} className="d-block w-100" alt="furniture" />
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default Slider;