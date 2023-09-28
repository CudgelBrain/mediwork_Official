import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Contact = ({ showMap }) => {
  const [selectedOption, setSelectedOption] = useState("sayHi");

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
    <div className="max-w-7xl mx-auto">
      <div className="border border-blue bg-blue p-16 sm:flex ">
        <div className="sm:w-[60%]">
          <h1 className="text-yellow text-3xl leading-normal font-bold">
            Left questions? Get free consultation and free trial!
          </h1>
          <p className="text-l_grey mt-4">
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
          {showMap && (
            <div>
              <img
                src="/contact/map.png"
                alt="Map here"
                className="w-[570px] h-[249px]"
              />
              {/* <div className=""> */}
              {/* <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    >
                      // Add map components here //
                    </GoogleMap>
                  </LoadScript> */}
            </div>
            // </div>
          )}
        </div>

        <div className="sm:ml-16 border rounded-3xl bg-yellow sm:w-[50%]">
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
                <div className="">
                  <button className="bg-blue text-white border-blue hover:bg-white border hover:border-blue hover:text-blue px-16 py-4 mt-8 rounded-md hidden sm:block">
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
