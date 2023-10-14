import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

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
      {/* <div className="Images mt-20 flex justify-between overflow-x-hidden items-baseline">
        <img src="/home/left.png" alt=""  width={500} height={600} className="mx-auto lg:block hidden"/>
        <div className="mx-auto ">
          <img src="/home/main.png" alt=""  width={500} height={200} className=""/>
          <img src="/home/computer_blur.png" alt="shadow"  width={500} height={200} className=""/>
        </div>
        <img src="/home/right.png" alt=""  width={500} height={600} className="mx-auto lg:block hidden"/>
      </div> */}
         
          {/* <div className="w-full">
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={2000} // Adjust the interval (in milliseconds) to control the speed of the carousel
        infiniteLoop={true} 
      >
        <div>
          <img src="/home/left.png" alt="Left Page" width={500} height={600}/>
        </div>
        <div className="mx-auto my-auto">
            <img src="/home/main.png" alt="Monitor Screen" width={500} height={200}/>
            <img
              src="/home/computer_blur.png"
              alt="Monitor Shadow"
              className="absolute top-[80rem]"
              width={500} 
              height={200}/>
        </div>
        <div>
          <img src="/home/right.png" alt="Right Page" width={500} height={600}/>
        </div>
      </Carousel>
      </div> */}

    <div className="flex justify-center items-center mt-40 mb-[40rem]">
      <div className="monitor relative w-[500px] h-[200px]">
        <img src="/home/main.png" alt="Monitor Screen" className="absolute top-0 left-0"/>
        <img
          src="/home/computer_blur.png"
          alt="Monitor Shadow"
          className="absolute top-[20rem] left-0"
        />
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          <div>
            <img src="/home/left.png" alt="left1" width={500} height={600}/>
          </div>
          <div>
            <img src="/home/left.png" alt="left2" width={500} height={600}/>
          </div>
          <div>
            <img src="/home/left.png" alt="Screen 3" width={500} height={600}/>
          </div>
        </Carousel>
      </div>
    </div>

    </div>
  );
};

export default OurRating;
