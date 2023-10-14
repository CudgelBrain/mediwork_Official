import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const AchievementsDemo = () => {
  return (
    <div>
      {" "}
      <div className="bg-white px-10 mt-16 flex flex-col lg:flex-row py-16 lg:py-10">
        <div className="lg:w-1/2 justify-center items-center lg:ml-20 w-full relative">
          <img
            src="/home/video.png"
            alt="Video"
            width={574}
            height={343}
            className="relative w-full lg:w-[574px] h-[250px] lg:h-[343px]"
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="relative -top-36 lg:-top-44 lg:left-[17.5rem] left-[50%] z-40 text-white"
            size="2x"
          />
          <div className="border bg-yellow bg-opacity-25 lg:p-10 h-[250px] lg:h-[343px] w-full lg:w-[574px] rounded-[1.7rem] absolute z-60 lg:top-[0rem] top-0 lg:block" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-yellow">Welcome To Healthcare</h1>
          <h2 className="text-black text-4xl font-semibold mt-2">
            Welcome to Healthcare
          </h2>
          <p className="mt-7 w-[85%]">
            Healthcare is a very painful process, especially if you’re not
            taking care of your health and having regular check-ups.
            HealhtyCarely makes it easier for everyone to schedule a doctor’s
            appointment.
          </p>
          <p className="py-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-yellow mr-2 mt-4"
            />
            Make a schedule online is easy
          </p>
          <p className="py-1">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-yellow mr-2"
            />
            Easy to hospital management
          </p>
          <button className="bg-yellow text-white hover:bg-white border hover:border-yellow hover:text-yellow px-8 py-3 mt-8 w-full sm:w-auto rounded-xl">
            Schedule Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsDemo;
