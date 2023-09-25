// components/DynamicTable.js
import React, { useState } from "react";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
    <div className="max-w-7xl mx-auto rounded-l-[2rem] bg-white">
      <table className="w-full">
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
      </table>
    </div>
  );
};

export default DynamicTable;
