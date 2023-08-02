// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='p-3'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Navigation Arrows
const CustomPrevArrow = (props) => (
   <button
     className="arrow left-next hover:text-teal-700"
     onClick={props.onClick}
   >
      <BsFillArrowRightCircleFill/>
   </button>
 );
 
   const CustomNextArrow = (props) => (
      <button
      className="arrow right-prev hover:text-teal-700"
      onClick={props.onClick}
      >
         <BsFillArrowLeftCircleFill/>
      </button>
   );
  

export default Carousel;
