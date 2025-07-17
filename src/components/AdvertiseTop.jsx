import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { IoIosArrowDown } from "react-icons/io";

const AdvertiseTop = () => {
  return (
    <>
      <div className="bg-secondary font-primary  text-[8px] lg:text-sm flex items-center justify-between">
        <Container className="relative">
          <Flex className="text-[#FAFAFA] justify-start  lg:justify-center items-center h-12">
            <div>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className="font-bold ml-4 hover:border-b-3 hover:border-white rounded-sm">
                ShopNow
              </span>
            </div>
            <div className="absolute right-1 lg:right-0 flex items-center gap-1.5">
              English <IoIosArrowDown className="text-xl" />{" "}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default AdvertiseTop;
