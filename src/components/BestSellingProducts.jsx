import React from "react";
import { useRef } from "react";

// icons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// components
import Container from "./Container";
import Flex from "./Flex";
import Card from "./Card";
import Slick from "./Slick";

const BestSellingProducts = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <Container className="mt-[150px]">
        <Flex className="justify-between">
          <div>
            {/* Header */}
            <Flex className="items-center gap-2 mb-6">
              <div className="h-10 w-5 bg-primary rounded-md"></div>
              <div className="font-primary font-semibold text-[16px] text-primary">
                This Month
              </div>
            </Flex>

            {/* Title */}
            <Flex>
              <h2 className="font-secondary text-4xl font-semibold">
                Best Selling Products
              </h2>
            </Flex>
          </div>
          <div>
            {/* Button */}
            <div className="flex justify-center">
              <button className="w-[159px] h-[56px] text-white bg-primary rounded-sm mt-9 hover:shadow-lg hover:scale-105 hover:bg-[#6b6563] transition-all duration-300">
                View All
              </button>
            </div>
          </div>
        </Flex>

        {/* Carousel */}
        <Slick
          ref={sliderRef}
          slidesToShow={4}
          dots={false}
          prevArrowHidden={true}
          nextArrowHidden={true}
          slickPrev={<GrLinkPrevious />}
          slickNext={<GrLinkNext />}
          className="mt-8"
        >
          <div className="p-2">
            <Card />
          </div>
          <div className="p-2">
            <Card />
          </div>
          <div className="p-2">
            <Card />
          </div>
          <div className="p-2">
            <Card />
          </div>
        </Slick>
      </Container>
    </>
  );
};

export default BestSellingProducts;
