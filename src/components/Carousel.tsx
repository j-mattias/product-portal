import { useEffect, useState } from "react";
import { IProduct } from "../interfaces";
import { ProductDisplay } from "./ProductDisplay";

interface ICarouselProps {
  products: IProduct[];
}

export function Carousel({ products }: ICarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the index when hitting prev button
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Update the index when hitting next button
  const handleNext = () => {
    const newIndex = currentIndex >= products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Change which product is displayed every 5s
  useEffect(() => {
    const timeId = setTimeout(() => {
      setCurrentIndex((c) => (c >= products.length - 1 ? 0 : c + 1));
    }, 5000);

    // Cleanup the timeout function
    return () => clearTimeout(timeId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel b-radius-4 box-shadow">
        {products.map((product, i) => (
          <div
            className={`carousel__slide ${currentIndex === i ? "active-slide" : ""}`}
            key={product.id}
          >
            <ProductDisplay product={product} />
          </div>
        ))}
        <i className="carousel-btn fa-solid fa-chevron-left" id="prev-btn" onClick={handlePrev}></i>
        <i
          className="carousel-btn fa-solid fa-chevron-right"
          id="next-btn"
          onClick={handleNext}
        ></i>
      </div>
      <ul className="carousel-dots">
        {products.map((_, i) => (
          <li
            className={`carousel-dots__dot ${i === currentIndex ? "dot-active" : ""}`}
            onClick={() => setCurrentIndex(i)}
            key={i}
          ></li>
        ))}
      </ul>
    </div>
  );
}
