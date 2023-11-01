import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SpecialFooter = () => {
  return (
    <div className="bg-yellow p-10 sm:flex border-t-4 border-yellow text-white">
      <div>
        <img src="/services/specialFooterLogoIcon.png" alt="specialFooterLogoIcon" className="h-[163.7px] w-[163.7px]"/>
      </div>
      <div className="sm:w-[38%] ml-5">
        <img
          src="/services/specialFooterLogo.png"
          alt="Logo"
          className="sm:w-[175px] sm:h-[47px]"
        />
        <p className="ml-2 mt-2">
          This free App provides a solution to your health needs by offering you
          a one-stop access to complete information about various medical
          checkups. This App carries simple tips and advice to help you maintain
          a healthy lifestyle.
        </p>
      </div>
      <div className="flex mt-10 sm:mt-0 text-white mx-10  mb-10">
        <div className="sm:px-10 sm:ml-28">
          <h2 className="text-2xl sm:text-xl font-semibold">Company</h2>
          <ul className="leading-relaxed mt-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="pl-10 sm:pl-3">
          <h2 className="text-2xl sm:text-xl font-semibold">Explore</h2>
          <ul className="leading-relaxed mt-2">
            <li>Terms & Conds</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="px-10">
          <h2 className="text-center text-2xl sm:text-xl font-semibold">
            Social Media
          </h2>
          <div className="flex mt-2">
            <div className="px-3 flex text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="px-3 flex text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="px-3 flex text-[30px] sm:text-[22px]">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFooter;
