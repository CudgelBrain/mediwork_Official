import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const OurAchievements = () => {
  const certs = [
    {
      img: "/home/certificates/top1.png",
      alt: "Certificate Image",
    },
    {
      img: "/home/certificates/5000.png",
      alt: "Certificate Image",
    },
    {
      img: "/home/certificates/top2.png",
      alt: "Certificate Image",
    },
    {
      img: "/home/certificates/clutch.png",
      alt: "Certificate Image",
    },
    {
      img: "/home/certificates/aws.png",
      alt: "Certificate Image",
    },
    {
      img: "/home/certificates/itr.png",
      alt: "Certificate Image",
    },
  ];
  return (
    <div className="mt-16">
      <div>
        <h3 className="text-yellow text-center mt-3">Our Achievements</h3>
        <h4 className="text-3xl font-bold text-white text-center">
          Recognitions and Partnerships
        </h4>
      </div>
      <div className="flex mt-16">
        {certs.map((data) => (
          <ul className="mx-14">
            <li>
              <img src={data.img} alt={data.alt} width={100} height={112} />
            </li>
          </ul>
        ))}
      </div>
      <div className="bg-white p-10 mt-16 flex">
        <div className="w-1/2">
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
          <div className="border bg-yellow bg-opacity-25 p-10 h-[343px] w-[574px] rounded-[1.8rem] absolute top-[208.24rem]" />
        </div>
        <div className="w-1/2 ml-10">
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

export default OurAchievements;
