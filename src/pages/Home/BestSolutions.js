import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="mt-16 relative lg:px-0 px-8">
        <div className="lg:absolute z-10 bottom-[2rem] -left-20 w-full lg:block hidden">
          <ul className="border-yellow w-[30%] bg-yellow shadow-xl py-4">
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

        <div className="border bg-white whiteCardPadding lg:rounded-none rounded-3xl mx-auto">
          <div className="text-3xl font-semibold mx-auto">
            <h2 className="border-b-[3px] border-yellow py-3 lg:w-[28rem]">
              Outpatient management System
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col">
            <p className="mt-5">
              This module actually serves as a starting point for scheduling a doctor appointment for any necessary diagnoses or consultations. By giving doctors quick access to patient information, this module enables doctors to provide better patient care and make timely diagnoses and treatment decisions.
              THERE ARE TWO KINDS OF PATIENT VISITS: NEW AND REVISIT. This module can also be used to manage new requests and the outcomes of laboratory tests, X-rays, and other examinations.
            </p>
            <img
              src="/home/doc.png"
              alt="Doctor Image"
              height={262}
              width={262}
              className="p-4"
            />
          </div>
          <h2 className="text-2xl font-bold mt-10">This Module Manages</h2>
          <div className="flex mt-5 text-lg decoration-red decoration-1 underline">
            <ul className="list-disc text-red ml-5 leading-8 lg:block hidden">
              <li>Visit Details</li>
              <li>Diagnosis Detail</li>
              <li>Patient Appointments</li>
              <li>Clinical Service Detail</li>
              <li>Test and Investigation Reporting</li>
            </ul>
            <ul className="list-disc text-red ml-10 leading-8">
              <li>Outpatient Medical Observation</li>
              <li>Appointment Scheduling</li>
              <li>Diagnosis and Treatment History</li>
              <li>Medicines Detail</li>
              <li>
                Medicines Advised and Can Be Supplied to Patients by Pharmacy.
              </li>
              <li>Vaccine Charts</li>
            </ul>
          </div>
          <div className="lg:text-right text-center mt-5">
            <button className="text-lg text-yellow">
              Explore More{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="align-middle ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
