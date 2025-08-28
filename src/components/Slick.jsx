import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// Custom Next Arrow
const NextArrow = ({ onClick, hidden }) => {
  if (hidden) return null;
  return (
    <GrLinkNext
      onClick={onClick}
      className="absolute z-20 bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box right-0 -top-14"
    />
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick, hidden }) => {
  if (hidden) return null;
  return (
    <GrLinkPrevious
      onClick={onClick}
      className="absolute z-20 bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box right-12 -top-14"
    />
  );
};

// Slick Wrapper
const Slick = ({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  dots = true,
  className,
  nextArrowHidden = false, // hide next arrow
  prevArrowHidden = false, // hide prev arrow
}) => {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow hidden={nextArrowHidden} />,
    prevArrow: <PrevArrow hidden={prevArrowHidden} />,
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
