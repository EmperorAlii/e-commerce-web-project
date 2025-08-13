import React from "react";
import { useState } from "react";

// components
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import BannerSlider from "./BannerSlider";

//icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const Banner = () => {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <>
      <Container className="mb-7 font-primary">
        <Flex className="flex-col lg:flex-row justify-between items-start">
          <div className="border-r-0 lg:border-r-3 border-r-black/30   pr-20 pt-10">
            <h2
              className="flex gap-2.5 items-center text-md font-bold mb-6 hover:cursor-pointer"
              onClick={() => setShowCategory(!showCategory)}
            >
              <BiCategory /> Category
            </h2>
            <List
              className={`${
                showCategory ? "hidden" : "block"
              }  lg:block banner-list`}
            >
              <ListItem className="mb-4 flex items-start">
                Women's Fashion{" "}
                <MdKeyboardArrowRight className="ml-4 font-bold text-2xl text-black" />
              </ListItem>
              <ListItem className="mb-4 flex items-start">
                Man's Fashion{" "}
                <MdKeyboardArrowRight className="ml-10 font-bold text-2xl text-black" />
              </ListItem>
              <ListItem className="mb-4">Electronics</ListItem>
              <ListItem className="mb-4">Home & Lifestyle</ListItem>
              <ListItem className="mb-4">Medicine</ListItem>
              <ListItem className="mb-4">Sports & Outdoor</ListItem>
              <ListItem className="mb-4">Baby’s & Toys</ListItem>
              <ListItem className="mb-4">Groceries & </ListItem>
              <ListItem>Health & Beauty</ListItem>
            </List>
          </div>

          <BannerSlider className="pt-10" />
        </Flex>
      </Container>
    </>
  );
};

export default Banner;
