import React from "react";
import { useState } from "react";

//assets
import image from "../assets/image_1.png";

//icons
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

//rating
import { Rating } from "react-simple-star-rating";

const Card = (product, className) => {
  const [rating, setRating] = useState(0); // initial rating value

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <>
      <div className={`${className} w-[270px] h-[350px] cursor-pointer`}>
        <div className="relative  bg-[#F5F5F5] w-full h-[250px]">
          <div className="group">
            {/* Card Thumbnail */}
            <img
              src={image}
              alt="#"
              className="absolute top-1/5 left-1/2 transform -translate-x-1/2 "
            />
            {/* Add to Cart Button */}
            <div className="absolute z-10 bottom-0 w-full h-10 bg-black text-white font-primary text-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
              Add to Cart
            </div>
          </div>

          {/*Discount Badge and Action Icons */}
          <div className="absolute bg-primary font-primary text-white text-center w-14 h-[26px] rounded-md  ml-3 mt-3 z-10">
            -40%
          </div>

          <CiHeart className="absolute z-10 text-2xl h-6 w-6 right-3 top-3 glow-box text-center bg-white rounded-full cursor-pointer " />
          <IoEyeOutline className="absolute z-10 text-2xl h-6 w-6 right-3 top-12 glow-box text-center bg-white rounded-full cursor-pointer" />
        </div>

        {/* Card Details */}
        <div>
          <div className="text-lg mt-4 font-primary font-medium text-[16px]">
            HAVIT HV-G92 Gamepad
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-2 mt-3">
            <div className="font-primary font-semibold text-lg text-primary">
              $90.00
            </div>
            <div className="font-primary text-sm text-gray-500 line-through">
              $150.00
            </div>
          </div>

          {/* Rating Section */}
          <Rating
            size={20}
            onClick={(rate) => {
              setRating(rate);
            }}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
