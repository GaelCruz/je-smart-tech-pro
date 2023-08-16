import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LogoCarousel({logoSlides}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
   // Reference to the Slider component
   const sliderRef = React.useRef(null);
 
   return (
     <div className='p-2 sm:p-5 pt-10'>
       <Slider {...settings} ref={sliderRef}>
         {logoSlides.map((logoSlides, index) => (
           <div key={index}>
             <img src={logoSlides.image} alt={`Slide ${index}`} className="mx-auto" />
           </div>
         ))}
       </Slider>
     </div>
   );
 };
