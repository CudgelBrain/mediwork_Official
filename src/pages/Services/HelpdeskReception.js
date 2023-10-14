import React from "react";

const HelpdeskReception = () => {
  return (
    <div className="text-white bg-navy_blue pb-4 md:pb-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:p-10 md:w-1/2 py-8 px-6 mt-4 md:ml-10" >
          <h2 className="md:text-4xl text-3xl font-semibold">Helpdesk / Reception</h2>
          <div className=" border-b-[3px] border-yellow py-2 w-16"/>
          <p className="mt-6 leading-loose">
            This module is in fact an entry point for schedules appointments
            with the doctor for any kind of diagnosis or consultations required.
            This module allows doctors to provide better patient care and quick
            diagnosis and treatment decisions by giving easy access to patient
            informaton. Patient visits are classified as new or revisit.
          </p>
          <h3 className="text-xl font-semibold mt-10">This Module Manages</h3>
          <div className="flex px-4 md:px-0">
            <div>
              <ul className="list-disc md:ml-5 mt-5 md:leading-10 leading-8 text-sm md:text-lg decoration-1">
                <li style={{textTransform:"uppercase"}} >Visit Detail</li>
                <li style={{textTransform:"uppercase"}} >Diagnosis Detail</li>
                <li style={{textTransform:"uppercase"}} >Patient Appointments</li>
                <li style={{textTransform:"uppercase"}} >Clinical Service Detail</li>
                <li style={{textTransform:"uppercase"}} >Test and Investigation Reporting</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-5 mt-5 md:leading-10 leading-8 text-sm md:text-lg decoration-1">
                <li style={{textTransform:"uppercase"}} >Outpatient Medical Observation</li>
                <li style={{textTransform:"uppercase"}} >Appointment Scheduling</li>
                <li style={{textTransform:"uppercase"}} >Diagnosis and Treatment History</li>
                <li style={{textTransform:"uppercase"}} >Medicines Detail</li>
                <li style={{textTransform:"uppercase"}} >Medicines Advised and Can Be Supplied to Patients by Pharmacy.</li>
                <li style={{textTransform:"uppercase"}} >Vaccine Charts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:mt-20'>
            <img src="/about/device.png" alt="Devices" className='md:h-[635px] w-[1080px]'/>
        </div>
      </div>
    </div>
  );
};

export default HelpdeskReception;
