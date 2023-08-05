import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Switch the prevArrow and nextArrow components to reverse the navigation direction
    prevArrow: <CustomNextArrow />,
    nextArrow: <CustomPrevArrow />,
  };

  // Reference to the Slider component
  const sliderRef = React.useRef(null);

  // Function to go to the next slide
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='p-3 relative'>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Navigation Arrows (unchanged)
const CustomPrevArrow = (props) => (
  <button
    className="arrow absolute left-next hidden sm:block hover:text-teal-700 "
    onClick={props.onClick}
  >
    <BsFillArrowRightCircleFill />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    className="arrow absolute right-prev hidden sm:block hover:text-teal-700"
    onClick={props.onClick}
  >
    <BsFillArrowLeftCircleFill />
  </button>
);

export default Carousel;
