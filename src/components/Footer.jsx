import React from "react";

//components
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Flex from "./Flex.jsx";
import List from "./List.jsx";
import ListItem from "./ListItem.jsx";

//icons and pictures
import { PiPaperPlaneRightBold } from "react-icons/pi";
import Qr from "../assets/Qr Code.png";
import googleLogo from "../assets/googlePlayLogo.png";
import appleLogo from "../assets/appStoreLogo.png";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white font-primary  w-full">
        <Container className="pt-20">
          <Flex className="flex-wrap justify-between gap-y-10">
            {/* First Column of Footer */}
            <List className="flex flex-col w-full sm:w-[45%] lg:w-auto">
              <ListItem className="!font-secondary font-bold text-2xl">
                Exclusive
              </ListItem>

              <ListItem className="text-xl font-medium pt-6">
                Subscribe
              </ListItem>

              <ListItem className="text-[16px] pt-6">
                Get 10% off your first order
              </ListItem>

              <ListItem className="relative pt-4">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="border-[1.5px] pl-3 h-12 rounded-sm border-[#FAFAFA] w-full"
                />
                <PiPaperPlaneRightBold className="absolute right-4 top-6.5 text-2xl text-[#FAFAFA] hover:scale-110" />
              </ListItem>
            </List>

            {/* Second Column */}
            <List className="flex flex-col gap-y-4 w-full sm:w-[45%] lg:w-auto">
              <ListItem className="font-medium text-xl pb-2">Support</ListItem>
              <ListItem>
                111 Bijoy sarani, Dhaka,
                <span className="block">DH 1515, Bangladesh</span>
              </ListItem>
              <ListItem>exclusive@gmail.com</ListItem>
              <ListItem>+88015-88888-9999</ListItem>
            </List>

            {/* Third Column */}
            <List className="flex flex-col gap-y-4 w-full sm:w-[45%] lg:w-auto">
              <ListItem className="pb-2 text-xl font-medium">Account</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Login/Register</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Shop</ListItem>
            </List>

            {/* Fourth Column */}
            <List className="flex flex-col gap-y-4 w-full sm:w-[45%] lg:w-auto">
              <ListItem className="pb-2 text-xl font-medium">
                Quick Link
              </ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms of Use</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Contact</ListItem>
            </List>

            {/* Fifth Column */}
            <List className="flex flex-col gap-y-4 w-full sm:w-[45%] lg:w-auto">
              <ListItem className="pb-2 text-xl font-medium">
                Download App
              </ListItem>
              <ListItem className="font-light text-xs">
                Save $3 with App New User Only
              </ListItem>
              <ListItem>
                <div className="flex items-center gap-x-4">
                  <img src={Qr} alt="Qr Code" />
                  <div className="flex flex-col gap-y-4">
                    <Button className="transition-transform duration-300 hover:scale-105">
                      <img
                        src={googleLogo}
                        alt="google logo"
                        className="w-full h-auto"
                      />
                    </Button>
                    <Button className="transition-transform duration-300 hover:scale-105">
                      <img
                        src={appleLogo}
                        alt="appleLogo"
                        className="w-full h-auto"
                      />
                    </Button>
                  </div>
                </div>
              </ListItem>

              <ListItem>
                {/* Footer Icons */}
                <div className="flex items-center gap-x-6">
                  <RiFacebookLine className="text-2xl hover:text-blue-500 transition-colors duration-200" />
                  <CiTwitter className="text-2xl hover:text-sky-400 transition-colors duration-200" />
                  <CiInstagram className="text-2xl hover:text-pink-500 transition-colors duration-200" />
                  <RiLinkedinLine className="text-2xl hover:text-blue-700 transition-colors duration-200" />
                </div>
              </ListItem>
            </List>
          </Flex>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
