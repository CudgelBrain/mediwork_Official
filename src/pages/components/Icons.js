import React from "react";
import Marquee from "react-fast-marquee";

const Icons = () => {
  const logoIcons = [
    {
      img: "/home/vector.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/pacVillain.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/vector.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/yin.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/pacVillain.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/vector.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
    {
      img: "/home/yin.png",
      alt: "Logo Icon Image",
      name: "logoIpsum",
    },
  ];

  return (
      <div className="h-16 items-center">
        <Marquee>
        {logoIcons.map((data) => (
          <div className="border rounded-lg flex px-8 py-3 mx-auto items-center h-12 lg:mr-24 mr-4">
            <div className="mx-2">
              <img src={data.img} alt={data.alt} width={22} height={33} />
            </div>
            <div>
              <h2 className="text-white">{data.name}</h2>
            </div>
          </div>
        ))}
        </Marquee>
      </div>
  );
};

export default Icons;
