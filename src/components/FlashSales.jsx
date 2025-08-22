import React, { useRef } from "react";

// components
import Container from "./Container";
import Flex from "./Flex";
import Card from "./Card";
import Slick from "./Slick";

// icons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const FlashSales = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <Container className="mt-[150px]">
        {/* Header */}
        <Flex className="items-center gap-2 mb-6">
          <div className="h-10 w-5 bg-primary rounded-md"></div>
          <div className="font-primary font-semibold text-[16px] text-primary">
            Today's
          </div>
        </Flex>

        {/* Title & nav */}
        <Flex>
          <h2 className="font-secondary text-4xl font-semibold">Flash Sales</h2>
          <Flex className="ml-auto gap-2">
            {/* Control buttons
            <GrLinkPrevious
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box"
            />
            <GrLinkNext
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-gray-200 h-8 w-8 p-1.5 rounded-full cursor-pointer glow-box"
            /> */}
          </Flex>
        </Flex>

        {/* Carousel */}
        <Slick
          ref={sliderRef}
          slidesToShow={4}
          dots={false}
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

export default FlashSales;
