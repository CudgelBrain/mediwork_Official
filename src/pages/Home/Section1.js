import React from "react";
import MainHeadline from "../components/MainHeadline";

const section1 = () => {
  const head = "Software Consulting and Development for Your";
  const spanHead = "Digital Success";
  const sentence =
    "Health carely is a new way to get health insurance quotes. We offer tools similar to those provided by insurance companies for free and prices are based on donations and not restrictive health plan networks.";
  const showButton = true;
  const buttonPlaceholder = "Contact Us";
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
      <div className="mt-20">
        <MainHeadline
          head={head}
          spanHead={spanHead}
          sentence={sentence}
          showButton={showButton}
          buttonPlaceholder={buttonPlaceholder}
        />
        <div className="flex mt-20 pb-20">
          {logoIcons.map((data) => (
            <div className="border rounded-lg flex px-8 py-3 mx-auto items-center overflow-hidden">
              <div className="mx-2">
                <img src={data.img} alt={data.alt} width={22} height={33}/>
              </div>
              <div>
                <h2 className="text-white">{data.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default section1;
