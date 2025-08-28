import React from "react";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import BrowseByCategory from "../components/BrowseByCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <BrowseByCategory />
    </>
  );
};

export default Home;
