import React from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from '@trendyol-js/react-carousel';

// import { useSnapCarousel } from "react-snap-carousel";

const OurRating = () => {


  const styles = {
    root: {},
    scroll: {
      position: "relative",
      display: "flex",
      overflow: "auto",
      scrollSnapType: "x mandatory"
    },
    item: {
      width: "500px",
      height: "500px",
      flexShrink: 0
    },
    itemSnapPoint: {
      scrollSnapAlign: "start"
    },
    controls: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "1.5rem"
    },
    nextPrevButton: {
      backgroundColor: 'white',
      color: 'orange',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'black 0px 0px 20px',
      borderRadius: '1.5rem',
      alignSelf: 'center',
      fontWieght: "bold",
      fontSize: '1.2rem',
      width: "2.5rem",
      height: "2.5rem",
      margin: "0px 12px"
    },
    nextPrevButtonDisabled: { opacity: 0.3 },
    pagination: {
      display: "flex"
    },
    paginationButton: {
      margin: "10px"
    },
    paginationButtonActive: { opacity: 0.3 },
    pageIndicator: {
      display: "flex",
      justifyContent: "center"
    }
  };

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




  const arr2 = [
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
    {
      image: "/home/review.png",
      alt: "Review",
    }, {
      image: "/home/review.png",
      alt: "Review",
    },
    {
      image: "/home/review.png",
      alt: "Review",
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
      <div className=" mt-40 mx-auto mb-32 w-full">
          <Carousel show={3} slide={3} swiping={true} 
          transition={0.5}
          infinite={true}
          autoSwipe={true}
          autoSwipeInterval={2000} 
          >
              <div className="w-[300px] lg:w-[500px]">
              <img src="/home/left.png" alt="left1" />
            </div>
            <div className="w-[300px] lg:w-[500px]">
              <img src="/home/monitor.png" alt="Screen 3" />
            </div>
            <div className="w-[300px] lg:w-[500px]">
              <img src="/home/left.png" alt="Screen 3" />
            </div>
            <div className="w-[300px] lg:w-[500px] mx-2">
              <img src="/home/left.png" alt="left1" />
            </div>
            <div className="w-[300px] lg:w-[500px]">
              <img src="/home/monitor.png" alt="Screen 3" />
            </div>
            <div className="w-[300px] lg:w-[500px]">
              <img src="/home/left.png" alt="Screen 3" />
            </div>
          </Carousel>
      </div>
    </div>
  );
};

export default OurRating;
