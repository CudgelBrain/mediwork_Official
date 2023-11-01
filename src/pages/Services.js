import React from "react";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
import Contact from "./components/Contact";
import HelpdeskReception from "./Services/HelpdeskReception";
import HelpdeskReception2 from "./Services/HelpdeskReception2";
import Footer from "./components/Footer";

const Services = () => {
  const startHead = "Hospital Healthcare Platform";
  const headImg = "/svg/one/doctors-not-css.svg";
  const content =
    "Health carely is a new way to get health insurance quotes. We offer tools similar to thoseprovided by insurance companies for free and prices are based on donations and not restrictive health plan networks.";
  const height = "0";
  const width = "1000";

  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Headlines
          startHead={startHead}
          content={content}
          showButton={true}
          headImg={headImg}
          height={height}
          width={width}
        />
      </div>
      <HelpdeskReception />
      <HelpdeskReception2/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
