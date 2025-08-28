import React from "react";
import { useRef } from "react";

// components
import Container from "./Container";
import Flex from "./Flex";
import Card from "./Card";
import CategoryCard from "./CategoryCard";
import Slick from "./Slick";

// icons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const BrowseByCategory = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <Container className="mt-[150px]">
        {/* Header */}
        <Flex className="items-center gap-2 mb-6">
          <div className="h-10 w-5 bg-primary rounded-md"></div>
          <div className="font-primary font-semibold text-[16px] text-primary">
            Categories
          </div>
        </Flex>

        {/* Title */}
        <Flex>
          <h2 className="font-secondary text-4xl font-semibold">
            Browse By Category
          </h2>
        </Flex>

        {/* Carousel */}
        <Slick
          ref={sliderRef}
          slidesToShow={6}
          dots={false}
          slickPrev={<GrLinkPrevious />}
          slickNext={<GrLinkNext />}
          className="mt-8"
        >
          <div className="p-2">
            <CategoryCard />
          </div>
          <div className="p-2">
            <CategoryCard />
          </div>
          <div className="p-2">
            <CategoryCard />
          </div>
          <div className="p-2">
            <CategoryCard />
          </div>
          <div className="p-2">
            <CategoryCard />
          </div>
          <div className="p-2">
            <CategoryCard />
          </div>
        </Slick>

        <div className="border-b-1 border-gray-300 w-full mt-[60px] mb-20"></div>
      </Container>
    </>
  );
};

export default BrowseByCategory;
