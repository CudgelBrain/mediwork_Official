import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "./Section1";
import BestSolutions from "./BestSolutions";
import MarginBt from "./MarginBt";
import OurRating from "./OurRating";
import OurAchievements from "./OurAchievements";
import FastSolutions from "./FastSolutions";
import Contact from "../components/Contact";
import OurCustomersSay from "./OurCustomersSay";
import Footer from "../components/Footer";
import AchievementsDemo from "./AchievementsDemo";

const HomePage = () => {
  const arr = [
    {
      img: "./home/icons/profile.png",
      alt: "Icon",
      title: "Choose Solution",
      desc: "Choose a medical specialist that best matches your specific health concerns and symptoms",
    },
    {
      img: "./home/icons/calendar.png",
      alt: "Icon",
      title: "Make a Schedule",
      desc: "Make a schedule with the doctor concerned so you can start the examination",
    },
    {
      img: "./home/icons/star.png",
      alt: "Icon",
      title: "Get your Solutions",
      desc: "After conducting an examination with a specialist we can help find the right healing method",
    },
  ];
  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className="bg-custom-image">
          <Navbar />
          <Section1 />
        </div>
        <div className="max-w-7xl mx-auto">
          <BestSolutions />
        </div>

        <OurRating />

        <div className="mx-auto max-w-7xl">
          <OurAchievements />
        </div>
        <div className="mx-auto">
          <AchievementsDemo/>
        </div>
        <div className="mt-20">
          <h3 className="text-yellow text-center mt-3">Fast Solutions</h3>
          <h4 className="text-3xl font-bold text-white text-center mt-2">
            <span className="text-yellow">Step By Step</span> to get your
            solutions
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-5">
          {arr.map((props,index) => (
            <FastSolutions key={index} props={...props}/>
          ))}
        </div>
        <OurCustomersSay />
        <Contact />
      </div>
      <Footer showMap={false} />
    </React.Fragment>
  );
};

export default HomePage;
