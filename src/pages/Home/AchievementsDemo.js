import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const AchievementsDemo = () => {
  return (
    <div>
      {" "}
      <div className="bg-white p-10 mt-16 flex">
        <div className="w-1/2 justify-center items-center ml-20">
          <img
            src="/home/video.png"
            alt="Video"
            width={574}
            height={343}
            className="relative"
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="relative -top-44 left-[17.5rem] z-40 text-white"
            size="2x"
          />
          <div className="border bg-yellow bg-opacity-25 p-10 h-[343px] w-[574px] rounded-[1.8rem] absolute top-[209.24rem]" />
        </div>
        <div className="w-1/2">
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
