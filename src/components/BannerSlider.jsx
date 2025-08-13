import React from "react";
import Slider from "react-slick";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// assets
import bannerImage from "../assets/bannerImg.png";

const BannerSlider = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`${className} relative w-full lg:w-3/4 h-full`}>
      <Slider {...settings}>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
