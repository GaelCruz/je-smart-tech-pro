import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const QuoteCarousel = ({ quotes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className='text-2xl text-center px-10 p-3 my-20'>
      <Slider {...settings} ref={sliderRef}>
        {quotes.map((quote, index) => (
          <div key={index}>
            <div className="p-10 max-w-5xl mx-auto">{quote.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default QuoteCarousel;
