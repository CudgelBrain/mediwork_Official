import React from "react";
import ConsultationButton from "../components/ConsultButton";

const section1 = ({head,spanHead,sentence,showButton,buttonPlaceholder}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-6xl font-semibold mt-10 lg:text-center text-white">   
           {head} <span className="text-yellow">{spanHead}</span>     
        </h1>
        <p className="mt-7 lg:w-2/4 lg:text-center text-left text-gray-500">
         {sentence}
        </p>
        {showButton && <ConsultationButton buttonPlaceholder={buttonPlaceholder}/>}
      </div>
  );
};

export default section1;
