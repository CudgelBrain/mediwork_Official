import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-10">
        <Contact showMap={true} />
      </div>
      <div className="mt-20">
        <Footer/>
      </div>
    </div>
  );
};

export default ContactUs;
