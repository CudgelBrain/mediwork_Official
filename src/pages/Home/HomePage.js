import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "./Section1";
import BestSolutions from "./BestSolutions";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-custom-image">
        <Navbar />
        <Section1 />
      </div>
    <BestSolutions/>
    </div>
  );
};

export default HomePage;
