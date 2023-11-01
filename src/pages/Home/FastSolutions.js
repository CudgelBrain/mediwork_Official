import React from "react";

const FastSolutions = ({ props }) => {
  return (
    <div className="mt-10 ">
      <div className="bg-white rounded-b-md sm:mx-3 border-t-[3px] border-yellow w-72 mx-auto">
        <div className="px-10 py-12">
          <img src={props.img} alt={props.alt} height={40} width={40} />
          <h3 className="text-sm font-semibold mt-3">{props.title}</h3>
          <p className="text-xs text-grey mt-3">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FastSolutions;
