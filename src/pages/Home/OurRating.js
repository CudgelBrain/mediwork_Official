// 'use client'
// import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// import Carousel from "react-spring-3d-carousel";
// import { config } from "react-spring";

// const defaultPosition = [
//   "left-0 z-10",
//   "top-16 md:left-16  -left-[40%] z-20",
//   "md:top-24 top-16 left-1/2 transform -translate-x-1/2 ",
//   `top-16 md:right-16 -right-[40%] z-20`,
//   "right-0 z-10"
// ]


const arr2 = [
  {
    key: 0,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    key: 1,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    key: 2,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    key: 3,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  }, {
    key: 4,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },

];

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



// const OurRating = () => {

//   const table = arr2.map((element, index) => {
//     return { ...element, onClick: () => setGoToSlide(index) };
//   });

//   useEffect(() => {
//     setOffsetRadius(props.offset);
//     setShowArrows(props.showArrows);
//   }, [props.offset, props.showArrows]);

//   const [offsetRadius, setOffsetRadius] = useState(2);
//   const [showArrows, setShowArrows] = useState(false);
//   const [goToSlide, setGoToSlide] = useState(null);
//   const [cards] = useState(table);

//   const [imagePosition, setImagePosition] = useState(arr2)
//   const [animations, setAnimations] = useState([])

//   function handleRotationImage(index) {
//     let direction;
//     if (index == 1) direction = "ltr"
//     else if (index === 3) direction = "rtl"

//     if (direction == 'ltr') {
//       let imagePositionCopy = [...imagePosition];
//       const el = imagePositionCopy.pop()
//       imagePositionCopy.unshift(el)
//       setImagePosition([...imagePositionCopy])
//       setAnimations([
//         "slide--active",
//         "slide-left",
//         "slide-left-3",
//       ])
//     }
//     if (direction == 'rtl') {
//       let imagePositionCopy = [...imagePosition];
//       const el = imagePositionCopy.shift()
//       imagePositionCopy.push(el)
//       setImagePosition([...imagePositionCopy])
//       setAnimations(
//         [
//           { x: -100 },
//           { x: -100 },
//           { x: 100, y: -10 },
//           { x: 100 },
//           { x: 400 },
//         ]
//       )
//     }

//   }

//   console.log(animations)




//   return (
//     // <AnimatePresence>
//       <div className="lg:mt-44 mt-24">
//         <div className="lg:px-0 px-6">
//           <h3 className="text-yellow text-center mt-3 slide-in-left">Our Ratings</h3>
//           <h4 className="text-3xl font-bold text-white text-center mt-2">
//             We’re employee benefit at
//             <span className="text-yellow"> 7500+</span> hospital
//           </h4>
//         </div>
//         <div className="flex items-center justify-center lg:align-middle flex-col lg:flex-row mt-10">
//           {arr.map((data) => (
//             <div className="bg-white rounded-b-md px-20 py-12 w-[300px] 
//           mb-12 lg:mb-0
//            mx-3 border-t-[3px] border-yellow text-center">
//               <h2 className="text-4xl font-semibold text-black">{data.numbers}</h2>
//               <h3 className="text-sm font-semibold mt-2">{data.title}</h3>
//               <p className="text-xs text-grey">{data.desc}</p>
//             </div>
//           ))}
//         </div>
//         <div className="w-full md:mt-32 h-screen relative overflow-hidden" style={{

//         }}>
//           <img src={"/home/mac.png"} alt="Screen 3"
//             className={`absolute md:w-[32%] w-[300px] top-10  z-50 left-1/2 transform -translate-x-1/2
//               `} />

//           <Carousel
//             slides={cards}
//             goToSlide={goToSlide}
//             offsetRadius={offsetRadius}
//             showNavigation={showArrows}
//             animationConfig={config.gentle}
//           />
//           {/* {
//           imagePosition.map((el, index) => {
//             return <motion.div key={index} onClick={() => handleRotationImage(index)} className={ `${(index == 0 || index==4)  ? "cursor-pointer hidden" : ""} ${animations[index]}`} 
//             // initial="initial"
//             // animate={animations[index] ? animations[index] : 'initial'}                  
//             >
//               <img src={el.image} alt="Screen 3"
//                 className={`absolute ${index == 2 ? "md:w-[25%] w-[230px]" : "md:w-[20%]  w-[230px]"} ${defaultPosition[index]}

//               `} />
//             </motion.div>
//           }
//           )} */}
//           <img src="/services/rerverse_screen.png" className="absolute md:w-[32%] w-[300px] top-72 md:top-2/4 left-1/2 transform -translate-x-1/2" />
//           <img src="/services/reflectionLeft.png" className="md:w-[22%] absolute  w-[230px] md:top-72 md:left-10 top-48 -left-44 z-20" />
//           <img src="/services/reflectionLeft.png" className="md:w-[22%] absolute   w-[230px]   md:top-72 md:right-10 top-48 -right-44 z-20" />
//         </div>
//       </div>
//     // </AnimatePresence>
//   );
// };

// export default OurRating;


import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function OurRating() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [{
    key: 0,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    key: 1,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  },
  {
    key: 2,
    image: "/home/monitor_bg.jpg",
    alt: "Review",
  }];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = newDirection => {
    setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <>
      <div className="lg:mt-34 mt-24">
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

      </div>
      <div className="main-wrapper w-full md:mt-32 md:mb-16">
        <div className="wrapper relative md:mb-16">
          {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
          <img src={"/home/mac.png"} alt="Screen 3"
            className={`absolute md:w-[400px] w-[190px] md:top-0  z-50 left-1/2 transform -translate-x-1/2
              `} />

          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item, index) => {
              // The layout prop makes the elements change its position as soon as a new one is added
              // The key tells framer-motion that the elements changed its position
              return (
                <motion.div
                  key={item.key}
                  layout
                  custom={{
                    direction,
                    position: () => {
                      if (item.key === visibleItems[0]) {
                        return 'left';
                      } else if (item.key === visibleItems[1]) {
                        return 'center';
                      } else {
                        return 'right';
                      }
                    },
                  }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1 }}
                  onClick={() => (index === 0) ? handleClick(-1) : (index === 2) ? handleClick(1) : null}
                >
                  <img src={item.image} className={`${index == 1 ? "md:w-[450px] w-[230px]" : "md:w-[300px]  w-[130px]"}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position }) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: zIndex[position()],
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

const zIndex = {
  left: 1,
  center: 2,
  right: 1,
};