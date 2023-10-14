import React from "react";

const HelpdeskReception2 = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:mt-20 order-2 md:order-1 ">
          <img
            src="/services/encounter.png"
            alt="Devices"
            className="md:h-[635px] w-[1080px]"
          />
        </div>
        <div className="md:p-10 md:w-1/2 py-8 px-6 md:mt-4 md:ml-10 order-1">
          <h2 className="md:text-4xl text-3xl font-semibold">Inpatient Management</h2>
          <div className=" border-b-[3px] border-yellow py-2 w-16" />
          <p className="mt-6 leading-loose">
          This module manages the patient’s admission & transfer functions.
It automates the day-to-day administrative activities and provides
an easy access to other modules for a better and instant patient
care. It provides instant access pertaining to admission of patient,
availability of beds, Collection of advance, Billing, Emergency
admission, transfer of patient from one ward to the other and so on
          </p>
          <h3 className="text-xl font-semibold mt-10">THIS MODULE MANAGES</h3>
          <div className="flex px-4 md:px-0">
            <div>
              <ul className="list-disc md:ml-5 mt-5 md:leading-10 leading-8 text-sm md:text-lg decoration-1">
                <li style={{textTransform:"capitalize"}} >PATIENT ADMISSION</li>
                <li style={{textTransform:"capitalize"}} >BED STATUS VIEW</li>
                <li style={{textTransform:"capitalize"}} >PATIENT ROOM SHIFTING</li>
                <li style={{textTransform:"capitalize"}} >AUTOMATED DISCHARGE SUMMARY</li>
                <li style={{textTransform:"capitalize"}} >PRE AND POST OPERATIVE DIAGNOSIS</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc md:ml-5 mt-5 md:leading-10 leading-8 text-sm md:text-lg decoration-1">
                <li style={{textTransform:"capitalize"}} >TEST AND INVESTIGATION REPORTING</li>
                <li style={{textTransform:"capitalize"}} >OPERATION THEATRE SCHEDULING</li>
                <li style={{textTransform:"capitalize"}} >DIAGNOSIS AND TREATMENT HISTORY</li>
                <li style={{textTransform:"capitalize"}} >IP MEDICAL OBSERVATION</li>
                <li style={{textTransform:"capitalize"}} >
                SINGLE UNIQUE ALLOCATED TO EACH PATIENT
TO ACCESS ALL THEIR RESPECTIVE RECORDS.
                </li>
                <li style={{textTransform:"capitalize"}} >Vaccine Charts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpdeskReception2;
