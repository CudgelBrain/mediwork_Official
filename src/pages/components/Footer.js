import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-white py-5 px-12 md:px-20 lg:py-10 md:flex border-t-4 border-yellow">
      <div className="w-full md:w-[42%] md:ml-20">
        <img
          src="/blueLogo.png"
          alt="Logo"
          className="w-[150px] h-[70px] md:w-[143px] md:h-[51px]"
        />
        <p className="lg:mt-4 text-sm md:text-lg md:mt-0">
          This free App provides a solution to your health needs by offering you
          a one-stop access to complete information about various medical
          checkups. This App carries simple tips and advice to help you maintain
          a healthy lifestyle.
        </p>
      </div>
      <div className="flex justify-between mt-5 md:mt-0">
        <div className="md:px-10 text-l_black md:ml-40">
          <h2 className="text-md lg:text-xl font-semibold">Company</h2>
          <ul className="leading-snug lg:leading-relaxed text-sm md:text-lg mt-2">
            <li className="md:mt-0 mt-3">
              <Link href="/">Home</Link>
            </li>
            <li className="md:mt-0 mt-1">
              <Link href="/AboutUs/About">About</Link>
            </li>
            <li className="md:mt-0 mt-1">
              <Link href="/Services/S0ervices">Services</Link>
            </li>
            <li className="md:mt-0 mt-1">
              <Link href="/pricingPage/Pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="md:pl-3 text-l_black">
          <h2 className="text-md lg:text-xl font-semibold">Explore</h2>
          <ul className="leading-snug lg:leading-relaxed mt-2 text-sm md:text-lg">
            <li className="md:mt-0 mt-3">
              <Link href="/">Terms & Conds</Link>
            </li>
            <li className="md:mt-0 mt-1">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="md:mt-0 mt-1">
              <Link href="/">Cookies</Link>
            </li>
          </ul>
        </div>
        <div className="md:px-10 text-l_black">
          <h2 className="text-center text-md lg:text-xl font-semibold">
            Social Media
          </h2>
          <div className="flex mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-3 flex text-blue text-[30px] sm:text-[22px]"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
