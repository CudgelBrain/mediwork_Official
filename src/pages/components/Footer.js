import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-white py-16 px-12 md:px-20 lg:py-10 md:flex border-t-4 border-yellow">
      <div className="w-full md:w-[42%] md:ml-20">
        <img src="/blueLogo.png" alt="Logo" className="md:w-[143px] md:h-[51px]" />
        <p className="mt-4 text-sm md:text-lg md:mt-0">
          This free App provides a solution to your health needs by offering you
          a one-stop access to complete information about various medical
          checkups. This App carries simple tips and advice to help you maintain
          a healthy lifestyle.
        </p>
      </div>
      <div className="flex justify-between mt-10 md:mt-0">
        <div className="md:px-10 text-l_black md:ml-40">
          <h2 className="text-xl  font-semibold">Company</h2>
          <ul className="leading-relaxed text-sm md:text-lg mt-2">
            <li className="md:mt-0 mt-3">Home</li>
            <li className="md:mt-0 mt-1">About</li>
            <li className="md:mt-0 mt-1">Services</li>
            <li className="md:mt-0 mt-1">Pricing</li>
          </ul>
        </div>
        <div className="md:pl-3 text-l_black">
          <h2 className="text-xl  font-semibold">Explore</h2>
          <ul className="leading-relaxed mt-2 text-sm md:text-lg">
            <li className="md:mt-0 mt-3">Terms & Conds</li>
            <li className="md:mt-0 mt-1">Privacy Policy</li>
            <li className="md:mt-0 mt-1">Cookies</li>
          </ul>
        </div>
        <div className="md:px-10 text-l_black">
          <h2 className="text-center text-xl  font-semibold">Social Media</h2>
          <div className="flex mt-2">
            <div className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

