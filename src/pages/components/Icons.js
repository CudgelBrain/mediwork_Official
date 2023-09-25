import React from "react";

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
    <div>
      {" "}
      <div className="flex mt-20 pb-20">
        {logoIcons.map((data) => (
          <div className="border rounded-lg flex px-8 py-3 mx-auto items-center overflow-hidden">
            <div className="mx-2">
              <img src={data.img} alt={data.alt} width={22} height={33} />
            </div>
            <div>
              <h2 className="text-white">{data.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
