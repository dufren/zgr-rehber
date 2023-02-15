import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function EmployeeCard({
  id,
  name,
  surname,
  phone,
  website,
  companyName,
  email,
}) {
  return (
    <tr className="shadow-md border border-gray-300">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <button onClick={() => (window.location = `mailto:${email}`)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>{" "}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{name}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{surname}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{phone}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{website}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {companyName}
      </td>
    </tr>
  );
}

export default EmployeeCard;
