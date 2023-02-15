import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ data }) {
  let content =
    data &&
    data.map((employee) => (
      <EmployeeCard
        key={employee.id}
        name={employee.name}
        surname={employee.username}
        phone={employee.phone}
        website={employee.website}
        companyName={employee.company.name}
        email={employee.Email}
      />
    ));
  return (
    <>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-400 shadow">
            <tr>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Mail
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Name
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Surname
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Phone
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Website
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Company
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">{content}</tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeCardList;
