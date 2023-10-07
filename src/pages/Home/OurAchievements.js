import React from "react";

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
    <div className="mt-16 px-4">
      <div>
        <h3 className="text-yellow text-center mt-3">Our Achievements</h3>
        <h4 className="text-3xl font-bold text-white text-center">
          Recognitions and Partnerships
        </h4>
      </div>
      <div className="flex mt-16">
        {certs.map((data) => (
          <ul className="lg:mx-14 mx-auto">
            <li>
              <img src={data.img} alt={data.alt} width={100} height={112} className="w-[100px]" />
            </li>
          </ul>
        ))}
      </div>
     
    </div>
  );
};

export default OurAchievements;
