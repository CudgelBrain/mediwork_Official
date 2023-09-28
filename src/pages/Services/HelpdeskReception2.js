import React from "react";

const HelpdeskReception2 = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex">
        <div className="w-full sm:w-1/2 mt-20">
          <img
            src="/services/encounter.png"
            alt="Devices"
            className="h-[635px] w-[1080px]"
          />
        </div>
        <div className="p-10 w-1/2 mt-4 ml-10">
          <h2 className="text-4xl font-semibold">Helpdesk / Reception</h2>
          <div className=" border-b-[3px] border-yellow py-2 w-16" />
          <p className="mt-6 leading-loose">
            This module is in fact an entry point for schedules appointments
            with the doctor for any kind of diagnosis or consultations required.
            This module allows doctors to provide better patient care and quick
            diagnosis and treatment decisions by giving easy access to patient
            informaton. Patient visits are classified as new or revisit.
          </p>
          <h3 className="text-xl font-semibold mt-10">This Module Manages</h3>
          <div className="flex">
            <div>
              <ul className="list-disc ml-5 mt-5 leading-10 underline decoration-1">
                <li>Visit Detail</li>
                <li>Diagnosis Detail</li>
                <li>Patient Appointments</li>
                <li>Clinical Service Detail</li>
                <li>Test and Investigation Reporting</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-5 mt-5 leading-10 underline decoration-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpdeskReception2;
