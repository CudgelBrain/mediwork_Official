import React from "react";

const Section2 = () => {
  const arr = [
    {
      img: "/home/helpDesk.png",
      alt: "Help Desk Image",
      title: "Helpdesk / Reception",
    },
    {
      img: "/home/mgmt.png",
      alt: "Management Image",
      title: "Outpatient management",
    },
    {
      img: "/home/inpatient.png",
      alt: "Inpatient Image",
      title: "Inpatient management",
    },
    {
      img: "/home/ward.png",
      alt: "Ward Bed Image",
      title: "Ward management",
    },
    {
      img: "/home/lab.png",
      alt: "Lab Image",
      title: "Laboratory management",
    },
    {
      img: "/home/ot.png",
      alt: "OT Image",
      title: "OT management",
    },
    {
      img: "/home/blood.png",
      alt: "Blood Drop Image",
      title: "Blood Bank management",
    },
    {
      img: "/home/emergency.png",
      alt: "Emergency Image",
      title: "Emergency management",
    },
    {
      img: "/home/insurance.png",
      alt: "Insurance Image",
      title: "Insurance management",
    },
    {
      img: "/home/appointment.png",
      alt: "Appointment Image",
      title: "Appointment scheduling",
    },
  ];
  return (
    <div>
      <div>
        <h3 className="text-yellow text-center mt-3">Best Solutions</h3>
        <h4 className="text-3xl font-bold text-white text-center">
          Explore Our Offering
        </h4>
      </div>
      <div className=" mt-16">
        <div>
          <ul className="border-yellow w-[30%] bg-yellow shadow-xl">
            {arr.map((data) => (
              <div className="transition hover:w-[25rem] hover:bg-blue hover:shadow-xl flex justify-start items-center border-b-[0.5px] hover:border-b-blue">
                <div className=" ml-8">
                  <img src={data.img} alt={data.alt} width={45} height={45} />
                </div>
                <div>
                  <li className="px-10 py-6 text-white text-xl cursor-pointer">
                    {/* {" "} */}
                    {data.title}
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="border bg-white">
          <h2 className="text-2xl font-bold border-b-2 border-yellow">Outpatient management System</h2>
        </div>
      </div>
    </div>
  );
};

export default Section2;
