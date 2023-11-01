import React from "react";
import MainHeadline from "../components/MainHeadline";
import Icons from "../components/Icons";

const section1 = () => {
  const head = "Software Consulting and Development for Your";
  const spanHead = "Digital Success";
  const sentence =
    "Health carely is a new way to get health insurance quotes. We offer tools similar to those provided by insurance companies for free and prices are based on donations and not restrictive health plan networks.";
  const showButton = true;
  const buttonPlaceholder = "Contact Us";
  
  return (
    <div>
      <div className="mt-6 lg:mt-20 p-6">
        <MainHeadline
          head={head}
          spanHead={spanHead}
          sentence={sentence}
          showButton={showButton}
          buttonPlaceholder={buttonPlaceholder}
        />
        <div className="my-16">
       <Icons/>
       </div>
      </div>
    </div>
  );
};

export default section1;
