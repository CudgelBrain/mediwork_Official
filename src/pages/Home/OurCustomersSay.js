import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

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
    {
      image: "/home/review.png",
      alt: "Review",
    },{
      image: "/home/review.png",
      alt: "Review",
    },
    {
      image: "/home/review.png",
      alt: "Review",
    },
  ];

  const styles = {
    root: {},
    scroll: {
      position: "relative",
      display: "flex",
      overflow: "auto",
      scrollSnapType: "x mandatory"
    },
    item: {
      width: "250px",
      height: "250px",
      flexShrink: 0
    },
    itemSnapPoint: {
      scrollSnapAlign: "start"
    },
    controls: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"1.5rem"
    },
    nextPrevButton: {
      backgroundColor:'white',
      color:'orange',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      boxShadow:'black 0px 0px 20px',
      borderRadius:'1.5rem',
      alignSelf:'center',
      fontWieght:"bold",
      fontSize:'1.2rem',
      width:"2.5rem",
      height:"2.5rem",
      margin:"0px 12px"
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

  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes
  } = useSnapCarousel();

  return (
    <div className="mt-20">
       <div className="pb-10">
         <h3 className="text-yellow text-center mt-3">Fast Solutions</h3>
         <h4 className="text-3xl font-bold text-white text-center mt-2">
           Our Customers Say
         </h4>
       </div>
    <div className="w-full  bg-white p-10">
    <div style={styles.root} >
      <ul style={styles.scroll} ref={scrollRef}>
        {arr.map((item, i) =><img className="w-[300px] lg:w-[500px]" src={item.image} alt={item.alt} />
        
        )}
      </ul>
      <div style={styles.controls} aria-hidden>
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {})
          }}
          onClick={() => prev()}
        >
          {String.fromCharCode(8592)}
        </button>
      
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {})
          }}
          className="rounded-full shadow-lg"
          onClick={() => next()}
        >
          {String.fromCharCode(8594)}
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

const CarouselItem = ({ isSnapPoint, children }) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}
  >
    {children}
  </li>
);

export default OurCustomersSay;
