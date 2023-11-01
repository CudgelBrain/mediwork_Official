import React from "react";

const consultButton = (props) => {
  return (
    <div>
      <div className="buttons">
        <button className=" text-white hover:bg-blue hover:text-yellow hover:border-2 hover:border-yellow px-8 py-4 md:py-4 mt-8 w-full lg:w-auto rounded-xl bg-yellow">
          {props.buttonPlaceholder}
        </button>
      </div>
    </div>
  );
};

export default consultButton;
