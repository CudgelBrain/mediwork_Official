// components/DynamicTable.js
import React, { useState } from "react";
import { faArrowDown, faChevronCircleDown, faChevronDown, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DynamicTable = () => {
  const [data, setData] = useState([
    {
      name: "HOSPITAL SERVICES",
      dropdownOpen: false,
      dropdownItems: [
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
      ],
    },
    {
      name: "LABORATORY SERVICES",
      dropdownOpen: false,
      dropdownItems: [
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
      ],
    },
    {
      name: "LABORATORY SERVICES",
      dropdownOpen: false,
      dropdownItems: ["Helpdesk / Reception Management"],
    },
    {
      name: "LABORATORY SERVICES",
      dropdownOpen: false,
      dropdownItems: [
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
        "Helpdesk / Reception Management",
      ],
    },
    {
      name: "LABORATORY SERVICES",
      dropdownOpen: false,
      dropdownItems: ["Helpdesk / Reception Management"],
    },
  ]);

  const toggleDropdown = (index) => {
    const newData = [...data];
    newData[index].dropdownOpen = !newData[index].dropdownOpen;
    setData(newData);
  };

  return (
    <div className="max-w-7xl mx-auto pl-6 lg:pl-0 bg-white" style={{
      background: 'transparent'
    }}  >
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"  >
        <thead class="text-xs text-gray-500 uppercase bg-gray-50 dark:transparent dark:text-gray-400 " style={{
          background: 'transparent'
        }}  >
          <tr>
            <th scope="col" className=" text-white text-3xl bg-yellow  px-6 py-4" style={{
              borderTopLeftRadius: "40px",

            }}>
              Our Plans
            </th>
            <th scope="col" className=" text-white text-lg bg-vvl_blue border-x-2 border-x-black p-4">
              Star Package (S10)
            </th>
            <th scope="col" className=" text-white text-lg border-x-2 border-x-black bg-vl_blue  p-4">
              Standard Package (S20)
            </th>
            <th scope="col" className=" text-white text-lg bg-l_blue  p-4">
              Premium Package (S30)
            </th>

          </tr>
        </thead>
        <tbody className="">
          <tr class="bg-white text-center  dark:bg-gray-300 text-black">
            <th scope="row" class="px-6 py-4 font-bold  flex justify-between items-center">
              HOSPITALS SERVICES    <FontAwesomeIcon icon={faChevronDown} className="mr-2 font-bold" />
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">

            </td>
            <td class="px-6 py-4">
         
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black ">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2" style={{
                color: 'red'
              }} />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-green-500" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
            <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black">
            Helpdesk / Reception Management
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
          <th scope="row" class="px-6 py-4 font-bold flex justify-between items-center">
              LABORATORY SERVICES    <FontAwesomeIcon icon={faChevronDown} className="mr-2 font-bold" />
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
          <th scope="row" class="px-6 py-4 font-bold flex justify-between items-center">
              LABORATORY SERVICES    <FontAwesomeIcon icon={faChevronDown} className="mr-2 font-bold" />
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
          <th scope="row" class="px-6 py-4 font-bold flex justify-between items-center ">
              LABORATORY SERVICES    <FontAwesomeIcon icon={faChevronDown} className="mr-2 font-bold" />
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
          <th scope="row" class="px-6 py-4 font-bold flex justify-between items-center">
              LABORATORY SERVICES    <FontAwesomeIcon icon={faChevronDown} className="mr-2 font-bold" />
            </th>
            <td class="px-6 py-4 text-center border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
            <td class="px-6 py-4 border-x-2 border-x-black">
              <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-orange-400" />
            </td>
          </tr>
          <tr>
            <th scope="col" className=" text-white text-3xl bg-yellow  text-center  p-3" style={{
              borderBottomLeftRadius: "40px",

            }}>
            </th>
            <th scope="col" className=" text-white text-md bg-vvl_blue text-center  p-3 border-x-2 border-x-black">
              Buy Now
            </th>
            <th scope="col" className=" text-white text-md bg-vl_blue text-center  p-3 border-x-2 border-x-black">
              Buy Now
            </th>
            <th scope="col" className=" text-white text-md bg-l_blue  text-center p-3">
              Buy Now
            </th>

          </tr>
        </tbody>
      </table>


      {/* <table className="w-full">
        <thead>
          <tr className="text-white">
            <th className="text-3xl bg-yellow w-[40%] pt-5 pb-5">Our Plans</th>
            <th className="text-lg bg-vvl_blue w-[20%]">Starter package (S10)</th>
            <th className="text-lg bg-vl_blue w-[20%]">Standard package (S20)</th>
            <th className="text-lg bg-l_blue w-[20%]">Premium package (S30)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="text-lg font-semibold">
                <td>{row.name}</td>
                <td>{row.name}</td>
                <td>{row.name}</td>
                <td>{row.name}</td>
              </tr>
              {row.dropdownOpen &&
                row.dropdownItems.map((item, subIndex) => (
                  <tr key={`${index}-${subIndex}`}>
                    <td colSpan="4">{item}</td>
                  </tr>
                ))}
              <tr>
                <td colSpan="4">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-blue-500 underline flex items-center"
                  >
                    {row.dropdownOpen ? (
                      <FontAwesomeIcon icon={faAngleDown} className="mr-2" />
                    ) : (
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    )}
                  </button>
                </td>
              </tr>

            </React.Fragment>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default DynamicTable;
