import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const ContactUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-10">
        <Contact showMap={true} />
      </div>
      <div className="md:mt-8 mt-8">
        <Footer/>
      </div>
    </div>
  );
};

export default ContactUs;
