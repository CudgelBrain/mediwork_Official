// components/DynamicTable.js
import React, { useState, useRef, useEffect } from "react";
import { faArrowDown, faChevronCircleDown, faChevronDown, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DynamicTable = () => {


  const mainTableRef = useRef(null);

  useEffect(() => {
      // Check if the main table exists
      if (mainTableRef.current) {
          // Clone the table
          const clonedTable = mainTableRef.current.cloneNode(true);
          // Add the 'clone' class to the cloned table
          clonedTable.classList.add('clone');

          // Append the cloned table to the 'table-scroll' element
          const tableScroll = document.getElementById('table-scroll');
          if (tableScroll) {
              tableScroll.appendChild(clonedTable);
          }
      }
  }, []);  

  // const [data, setData] = useState([
  //   {
  //     name: "HOSPITAL SERVICES",
  //     dropdownOpen: false,
  //     dropdownItems: [
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //     ],
  //   },
  //   {
  //     name: "LABORATORY SERVICES",
  //     dropdownOpen: false,
  //     dropdownItems: [
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //     ],
  //   },
  //   {
  //     name: "LABORATORY SERVICES",
  //     dropdownOpen: false,
  //     dropdownItems: ["Helpdesk / Reception Management"],
  //   },
  //   {
  //     name: "LABORATORY SERVICES",
  //     dropdownOpen: false,
  //     dropdownItems: [
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //       "Helpdesk / Reception Management",
  //     ],
  //   },
  //   {
  //     name: "LABORATORY SERVICES",
  //     dropdownOpen: false,
  //     dropdownItems: ["Helpdesk / Reception Management"],
  //   },
  // ]);

  // const toggleDropdown = (index) => {
  //   const newData = [...data];
  //   newData[index].dropdownOpen = !newData[index].dropdownOpen;
  //   setData(newData);
  // };

  return (
    <div className="max-w-7xl mx-auto pl-6 lg:pl-0 bg-white" style={{
      background: 'transparent'
    }}  >
      <div class="table-outer-wrapper">
            <div className="table-container">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 main-table" ref={mainTableRef}>
              <thead class="text-xs text-gray-500 uppercase bg-gray-50 dark:transparent dark:text-gray-400 " style={{
                background: 'transparent'
              }}  >
                <tr>
                  <th scope="col" className="text-white text-3xl bg-yellow  px-6 py-4" style={{
                    borderTopLeftRadius: "40px",

                  }}>
                    Our Plans
                  </th>
                  <th scope="col" className=" text-white text-lg bg-vvl_blue border-x-2 border-x-black p-4 sortable">
                    Star Package (S10)
                  </th>
                  <th scope="col" className=" text-white text-lg border-x-2 border-x-black bg-vl_blue  p-4 sortable">
                    Standard Package (S20)
                  </th>
                  <th scope="col" className=" text-white text-lg bg-l_blue  p-4 sortable">
                    Premium Package (S30)
                  </th>

                </tr>
              </thead>
              <tbody className="">

                <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  bg-gray-50 
                  ">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  dark:bg-gray-300 ">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl" style={{
                      color: 'red'
                    }} />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black  bg-gray-50">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl text-green-500" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black  dark:bg-gray-300">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  bg-gray-50">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium border-x-2 border-x-black  dark:bg-gray-300">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  bg-gray-50">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 text-center border-x-black">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  dark:bg-gray-300">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-white dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  bg-gray-50">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
                <tr class=" bg-gray-50 dark:bg-gray-300 dark:border-gray-700 text-black">
                  <th scope="row" class="px-6 py-4 font-medium  dark:bg-gray-300">
                    Helpdesk / Reception Management
                  </th>
                  <td class="px-6 py-4 text-center border-x-2 border-x-black">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-xl" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                  <td class="px-6 py-4 border-x-2 border-x-black text-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-xl text-orange-400" />
                  </td>
                </tr>
             
              </tbody>
              <tfoot>
              <tr>
                  <th scope="col" className=" text-white text-3xl bg-yellow  text-center  p-3 " style={{
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
              </tfoot>
            </table>
          </div>
          </div>
        </div>
      
  );
};

export default DynamicTable;
