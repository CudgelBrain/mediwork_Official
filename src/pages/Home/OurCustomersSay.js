import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const OurCustomersSay = () => {
  const arr = [
    {
      image: "/home/review.png",
      alt: "Review",
    },
    {
      image: "/home/review.png",
      alt: "Review",
    },
    {
      image: "/home/review.png",
      alt: "Review",
    },
  ];
  return (
    <div className="mt-20">
      <div>
        <h3 className="text-yellow text-center mt-3">Fast Solutions</h3>
        <h4 className="text-3xl font-bold text-white text-center mt-2">
          Our Customers Say
        </h4>
      </div>
      <Carousel showStatus={false}>
        <div className="w-full mt-16">
          <div className=" flex items-center justify-center min-h-[10vm] bg-white p-10">
            <div className="grid grid-cols-3 gap-[18px] h-full object-cover overflow-x-auto">
              {arr.map((itme) => (
                <img src={itme.image} alt={itme.alt} />
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default OurCustomersSay;
