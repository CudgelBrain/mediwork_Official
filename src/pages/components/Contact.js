import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";

const Contact = ({ showMap }) => {
  const [selectedOption, setSelectedOption] = useState("sayHi");


  const route = useRouter();
  console.log(route)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`max-w-7xl mx-auto ${route ==="/ContactUs/ContactUs"? "mt-0": "mt-16"}`}>
      <div className="border border-blue bg-blue lg:py-16 px-8 pb-16 sm:flex ">
        <div className="lg:w-[60%] w-full">
        {route.pathname === "/ContactUs/ContactUs" &&<h1 className="text-5xl lg:text-6xl font-semibold  mb-8 text-white">   
          Let's Connect
        </h1>}
          <h1 className="text-yellow text-2xl md:text-3xl leading-normal font-bold">
            Left questions? Get free consultation and free trial!
          </h1>
          <p className="text-l_grey mt-4 text-sm md:text-xl">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <div className="flex sm:flex-row flex-col sm:mr-10 sm:mt-5">
            <div className="sm:block flex sm:items-center flex-col">
              <p className="text-white mt-5">Email address</p>
              <p className="text-white font-semibold mt-1">
                info.mediworksservices@gmail.com
              </p>
              <p className="text-white mt-5">Phone number</p>
              <p className="text-white font-semibold mt-1">+91-86-3030-3358</p>
              <p className="text-white mt-5 sm:w-1/2">Address</p>
              <p className="text-white font-semibold mt-1 mb-10">
                Building No:- 58, Street No: 08, Om Sai Enclave, Greater Noida
                West, Gg Nagar U.P.- 201301
              </p>
            </div>
          </div>
       {showMap &&  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.378802593991!2d73.7515261761034!3d18.602024266679326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9803d0d67a5%3A0x23a5a39b89c5a08!2sMediworks%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1696703569193!5m2!1sen!2sin" width="570" height="250"  allowfullscreen=""
        className="rounded-xl w-full md:mb-0 mb-12" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        </div>

        <div className="lg:ml-16 border rounded-3xl bg-yellow lg:w-[50%]">
          <div className="rounded-3xl p-12">
            <div className="">
              <h2 className="text-3xl text-white font-semibold">Contact Us</h2>
              <form className=" mt-10" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-b-2 mr-3 leading-tight w-full px-3 py-2 focus:outline-none border-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-b-2 mr-3 leading-tight w-full px-3 py-2 focus:outline-none border-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium"
                  >
                    Company
                  </label>
                  <input
                    type="company"
                    id="company"
                    name="company"
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-b-2 mr-3 leading-tight w-full px-3 py-2 focus:outline-none border-black"
                    required
                  />
                </div>
                <div className="sm:mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-b-2 mr-3 leading-tight w-full px-3 py-2 focus:outline-none border-black"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-blue text-white border-blue hover:bg-white border hover:border-blue hover:text-blue px-12 py-3 md:px-16 md:py-4 mt-8 rounded-md">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
