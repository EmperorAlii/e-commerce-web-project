import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { IoIosArrowDown } from "react-icons/io";

const AdvertiseTop = () => {
  const [isOpen, setIsOpen] = useState(false); // dropdown state
  const [language, setLanguage] = useState("English"); // selected language

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="bg-secondary font-primary text-[8px] lg:text-sm flex items-center justify-between relative">
      <Container className="relative w-full">
        <Flex className="text-[#FAFAFA] justify-start lg:justify-center items-center h-12 relative">
          <div>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-bold ml-4 hover:border-b-3 hover:border-white rounded-sm cursor-pointer">
              ShopNow
            </span>
          </div>

          {/* Language selector */}
          <div className="absolute right-1 lg:right-0">
            <div
              className="flex items-center gap-1.5 cursor-pointer relative select-none"
              onClick={toggleDropdown}
            >
              {/* Display selected language */}
              {language}{" "}
              <IoIosArrowDown
                className={`text-xl transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              {/* Dropdown */}
              {isOpen && (
                <div className="absolute top-full right-0 mt-1 w-24 bg-white text-black rounded shadow-lg z-[999]">
                  <div
                    className="px-3 py-1 hover:bg-primary hover:opacity-80  cursor-pointer"
                    onClick={() => {
                      setLanguage("English");
                      setIsOpen(false);
                    }}
                  >
                    English
                  </div>
                  <div
                    className="px-3 py-1 hover:bg-primary hover:opacity-80 cursor-pointer"
                    onClick={() => {
                      setLanguage("Bangla");
                      setIsOpen(false);
                    }}
                  >
                    Bangla
                  </div>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default AdvertiseTop;
