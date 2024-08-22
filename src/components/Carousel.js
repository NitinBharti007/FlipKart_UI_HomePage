import React from 'react';
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  const banners = [
    { img: "https://www.youngisthan.in/wp-content/uploads/2016/10/Flipkart-Big-billion-day-2016-Sale-offers.png" },
    { img: "https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg" },
    { img: "https://storiesflistgv2.blob.core.windows.net/stories/2017/08/perfectbuy_clickbanner.jpg" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden shadow-lg rounded-lg">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img 
              src={banner.img} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
