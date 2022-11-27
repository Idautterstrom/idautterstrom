import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "450px",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: "url(§{slides[currentIndex].url})",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    fontFamily: "Rische Serif",
    left: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    fontFamily: "Rische Serif",
    right: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const dotStyles = {
    margin: "0 2px",
    cursor: "pointer",
    fontSize: "90px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ←
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        →
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            &#183;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
