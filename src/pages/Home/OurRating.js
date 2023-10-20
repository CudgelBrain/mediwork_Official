'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultPosition = [
  "left-0 z-10",
  "top-16 md:left-16  -left-[40%] z-20",
  "md:top-24 top-16 left-1/2 transform -translate-x-1/2 ",
  `top-16 md:right-16 -right-[40%] z-20`,
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
    image:  "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    image: "/home/monitor_bg.jpg",  
    alt: "Review",
  },
  {
    image:  "/home/monitor_bg.jpg",
    alt: "Review",
  }, {
    image:  "/home/monitor_bg.jpg",
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

    if (direction == 'ltr') {
      let imagePositionCopy = [...imagePosition];
      const el = imagePositionCopy.pop()
      imagePositionCopy.unshift(el)
      setImagePosition([...imagePositionCopy])
      setAnimations([
        "slide--active",
        "slide-left",
        "slide-left-3",
      ])
    }
    if (direction == 'rtl') {
      let imagePositionCopy = [...imagePosition];
      const el = imagePositionCopy.shift()
      imagePositionCopy.push(el)
      setImagePosition([...imagePositionCopy])
      setAnimations(
        [
          {x:-100},
          {x:-100},
          {x:100, y:-10},
          {x:100},
          {x:400},  
        ]
      )
    }

  }

  console.log(animations)




  return (
    <AnimatePresence>
    <div className="lg:mt-44 mt-24">
      <div className="lg:px-0 px-6">
        <h3 className="text-yellow text-center mt-3 slide-in-left">Our Ratings</h3>
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
      <div className="w-full md:mt-32 h-screen relative overflow-hidden" style={{
        
      }}>
        <img src={"/home/mac.png"} alt="Screen 3"
          className={`absolute md:w-[32%] w-[300px] top-10  z-50 left-1/2 transform -translate-x-1/2
              `} />
        {
          imagePosition.map((el, index) => {
            return <motion.div key={index} onClick={() => handleRotationImage(index)} className={ `${(index == 0 || index==4)  ? "cursor-pointer hidden" : ""} ${animations[index]}`} 
            // initial="initial"
            // animate={animations[index] ? animations[index] : 'initial'}                  
            >
              <img src={el.image} alt="Screen 3"
                className={`absolute ${index == 2 ? "md:w-[25%] w-[230px]" : "md:w-[20%]  w-[230px]"} ${defaultPosition[index]}
                
              `} />
            </motion.div>
          }
          )}
        <img src="/services/rerverse_screen.png" className="absolute md:w-[32%] w-[300px] top-72 md:top-2/4 left-1/2 transform -translate-x-1/2"/>
        <img src="/services/reflectionLeft.png" className="md:w-[22%] absolute  w-[230px] md:top-72 md:left-10 top-48 -left-44 z-20" />
          <img src="/services/reflectionLeft.png" className="md:w-[22%] absolute   w-[230px]   md:top-72 md:right-10 top-48 -right-44 z-20"/>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default OurRating;
