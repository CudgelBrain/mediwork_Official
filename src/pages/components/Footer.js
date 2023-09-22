import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-white p-20 flex border-t-4 border-yellow">
      <div className="w-[42%]">
        <img src="/blueLogo.png" alt="Logo" width={143} height={51} />
        <p>
          This free App provides a solution to your health needs by offering you
          a one-stop access to complete information about various medical
          checkups. This App carries simple tips and advice to help you maintain
          a healthy lifestyle.
        </p>
      </div>
      <div className="px-10 text-l_black ml-40">
        <h2 className="text-xl font-semibold">Company</h2>
        <ul className="leading-relaxed mt-2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="pl-3 text-l_black">
        <h2 className="text-xl font-semibold">Explore</h2>
        <ul className="leading-relaxed mt-2">
          <li>Terms & Conds</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="px-10 text-l_black">
        <h2 className="text-center text-xl font-semibold">Social Media</h2>
        <div className="flex mt-2">
          <div className="bg-white px-3 flex text-blue text-[22px]">
            <FontAwesomeIcon icon={faFacebook}/>
          </div>
          <div className="bg-white px-3 flex text-blue text-[22px]">
            <FontAwesomeIcon icon={faInstagram}/>
          </div>
          <div className="bg-white px-3 flex text-blue text-[22px]">
            <FontAwesomeIcon icon={faTwitter}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
