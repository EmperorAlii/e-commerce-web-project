import React, { useRef } from "react";

// components
import Container from "./Container";
import Flex from "./Flex";
import Card from "./Card";
import Slick from "./Slick";
import CountdownTimer from "./CountdownTimer";

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

        {/* Title */}
        <Flex>
          <h2 className="font-secondary text-4xl font-semibold">Flash Sales</h2>
          <CountdownTimer />
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
