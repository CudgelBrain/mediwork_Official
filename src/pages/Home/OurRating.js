import React from "react";

const OurRating = () => {
  const arr = [
    {
      numbers: "900+",
      title: "Verified Specialist",
      desc: "Highly Verified",
    },
    {
      numbers: "45000+",
      title: "Happy Customers",
      desc: "Highly Performance",
    },
    {
      numbers: "99.7%",
      title: "Positive Feedback",
      desc: "Customers Approve",
    },
  ];
  return (
    <div className="lg:mt-44 mt-24">
      <div className="lg:px-0 px-6">
        <h3 className="text-yellow text-center mt-3">Our Ratings</h3>
        <h4 className="text-3xl font-bold text-white text-center mt-2">
          We’re employee benefit at
          <span className="text-yellow"> 7500+</span> hospital
        </h4>
      </div>
      <div className="flex items-center justify-center lg:align-middle flex-col lg:flex-row mt-10">
        {arr.map((data) => (
          <div className="bg-white rounded-b-md px-20 py-12 w-[300px] 
          mb-12 lg:mb-0
           mx-3 border-t-[3px] border-yellow text-center">
            <h2 className="text-4xl font-semibold text-black">{data.numbers}</h2>
            <h3 className="text-sm font-semibold mt-2">{data.title}</h3>
            <p className="text-xs text-grey">{data.desc}</p>
          </div>
        ))}
      </div>
      <div className="Images mt-20 flex justify-between overflow-x-hidden items-baseline">
        <img src="/home/left.png" alt=""  width={500} height={600} className="mx-auto lg:block hidden"/>
        <div className="mx-auto ">
          <img src="/home/main.png" alt=""  width={500} height={200} className=""/>
          <img src="/home/computer_blur.png" alt="shadow"  width={500} height={200} className=""/>
        </div>
        <img src="/home/right.png" alt=""  width={500} height={600} className="mx-auto lg:block hidden"/>
      </div>
    </div>
  );
};

export default OurRating;
