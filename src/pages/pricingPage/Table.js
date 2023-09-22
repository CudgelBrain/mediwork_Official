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
    <div className="max-w-7xl mx-auto rounded-l-lg">
      <table className="w-full">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
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
