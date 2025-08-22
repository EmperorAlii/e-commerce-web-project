import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// Custom arrows
const NextArrow = ({ onClick }) => (
  // Using absolute positioning for arrows
  <GrLinkNext
    onClick={onClick}
    className="absolute z-10 bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box right-0 -top-14"
  />
);

const PrevArrow = ({ onClick }) => (
  // Using absolute positioning for arrows
  <GrLinkPrevious
    onClick={onClick}
    className="absolute z-10 bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box right-12 -top-14"
  />
);

const Slick = ({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  dots = true,
  className,
}) => {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow />, // injecting custom arrows
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className={`relative ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Slick;
