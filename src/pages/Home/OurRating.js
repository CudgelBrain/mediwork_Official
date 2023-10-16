import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from '@trendyol-js/react-carousel';


const defaultPosition = [
  "left-0 z-10",
  "top-16 left-16 z-20",
  "top-20 left-1/2 transform -translate-x-1/2 ",
  `top-16 right-16 z-20`,
  "right-0 z-10"
]

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
    image: "/home/doc.png",
    alt: "Review",
  },
  {
    image: "/home/review.png",
    alt: "Review",
  },
  {
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    image: "/services/doctors.png",
    alt: "Review",
  }, {
    image: "/home/video.png",
    alt: "Review",
  },

];


const OurRating = () => {

  const [imagePosition, setImagePosition] = useState(arr2)
  const [animations, setAnimations] = useState([])

  function handleRotationImage(index) {
    let direction;
    if (index == 1) direction = "ltr"
    else if (index === 3) direction = "rtl"

    if(direction == 'ltr') {
      let imagePositionCopy = [...imagePosition];
      const el = imagePositionCopy.pop()
      imagePositionCopy.unshift(el)      
      setImagePosition([...imagePositionCopy])
      setAnimations([
     
      ])
    }
    if(direction == 'rtl') {
      let imagePositionCopy = [...imagePosition];
      const el = imagePositionCopy.shift()
      imagePositionCopy.push(el)      
      setImagePosition([...imagePositionCopy])
      setAnimations([
        
        ])
    }

  }

  console.log(animations[4])




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
      <div className="w-full  h-screen relative">

        <img src={"/home/mac.png"} alt="Screen 3"
          className={`absolute w-[32%] top-10  z-50 left-1/2 transform -translate-x-1/2
              `} />
        {
          imagePosition.map((el, index) => {
            return <span key={index} onClick={() => handleRotationImage(index)} className={animations[index] || ""} >
              <img src={el.image} alt="Screen 3"
                className={`absolute ${index == 2 ? "w-[25%]" : "w-[20%]"} ${defaultPosition[index]}
              `} />
            </span>
          }
          )}

      </div>

    </div>
  );
};

export default OurRating;
