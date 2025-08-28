import React from "react";

// components
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import BrowseByCategory from "../components/BrowseByCategory";
import BestSellingProducts from "../components/BestSellingProducts";

const Home = () => {
  // Page Structure
  return (
    <>
      <Banner />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
    </>
  );
};

export default Home;
