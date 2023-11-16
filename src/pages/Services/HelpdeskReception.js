import React from "react";

const HelpdeskReception = ({ data }) => {
  return (
    <div className="text-white bg-navy_blue pb-4 md:pb-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:p-10 md:w-1/2 py-8 px-6 mt-4 md:ml-10" >
          <h2 className="md:text-4xl text-3xl font-semibold">{data.heading}</h2>
          <div className=" border-b-[3px] border-yellow py-2 w-16" />
          <p className="mt-6 leading-loose">
            {data.description}
          </p>
          {data?.modules?.length > 0 && <h3 className="text-xl font-semibold mt-10">This Module Manages</h3>}
          <div className="flex px-4 md:px-0">
            <div>
              <ul className="list-disc md:ml-5 mt-5 md:leading-10 leading-8 text-sm md:text-lg grid gap-x-4 grid-cols-2 decoration-1">
                {data.modules && data.modules.length > 0 ?
                  data.modules.map((el) => <li  style={{ textTransform: "uppercase" }} >{el}</li>) : null}

              </ul>
            </div>


          </div>
        </div>
        <div className='w-full md:w-1/2 md:mt-20'>
          <img src="/about/device.png" alt="Devices" className='md:h-[635px] w-[1080px]' />
        </div>
      </div>
    </div>
  );
};

export default HelpdeskReception;
