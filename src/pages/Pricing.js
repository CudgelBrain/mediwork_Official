import React from "react";
import Navbar from "./components/Navbar";
import MainHeadline from "./components/MainHeadline";
import Footer from "./components/Footer";
import DynamicTable from "./pricingPage/Table";
const Pricing = () => {
  const head = "Find the Platform that is";
  const spanHead = "Right for You";
  const sentence =
    "Health carely is a new way to get health insurance quotes. We offer tools similar to those provided by insurance companies for free and prices are based on donations and not restrictive health plan networks.";
  const showButton = true;
  const buttonPlaceholder = "Get Quotation";
  return (
    <div>
      <Navbar />
      <div className="mt-10 lg:mt-20 lg:px-0 px-6">
        <MainHeadline
          head={head}
          spanHead={spanHead}
          sentence={sentence}
          showButton={showButton}
          buttonPlaceholder={buttonPlaceholder}
        />
      </div>
      <div className="mt-16">
        <DynamicTable />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
