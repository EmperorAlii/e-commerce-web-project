import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <>
      <Container className="mb-7">
        <Flex className="justify-between items-start">
          <div className="border-r-3 border-r-black/30  pr-20 pt-10">
            <List>
              <ListItem className="mb-4">Women's Fashion</ListItem>
              <ListItem className="mb-4">Man's Fashion</ListItem>
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
