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

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-custom-image">
        <Navbar />
        <Section1 />
      </div>
    <BestSolutions/>
    <OurRating/>
    <OurAchievements/>
    <FastSolutions/>
    <OurCustomersSay/>
    <Contact/>
    <Footer/>
    <MarginBt/>
    </div>
  );
};

export default HomePage;
