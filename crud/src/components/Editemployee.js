import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Editemployee = (route) => {
  let history = useHistory();
  const { employees, editEmployee } = useContext(GlobalContext);
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    emailId: "",
    aadharNumber: "",
    panNumber: "",
    employeeType: "",
    joiningDate: "",
  });
  const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (emp) => emp.id === parseInt(employeeId)
    );
    setSeletedUser(selectedUser);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push("/");
  };

  const handleOnChange = (userKey, value) => {
    setSeletedUser({ ...selectedUser, [userKey]: value });
  };

  if (!selectedUser || !selectedUser.id) {
    return <div>sdf</div>;
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="emailId"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.emailId}
              onChange={(e) => handleOnChange("emailId", e.target.value)}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="aadharNumber"
            >
              Aadhar Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.aadharNumber}
              onChange={(e) => handleOnChange("aadharNumber", e.target.value)}
              type="number"
              placeholder="Enter Your Aadhar Number"
              min="10"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="panNumber"
            >
              Pan Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.panNumber}
              onChange={(e) => handleOnChange("panNumber", e.target.value)}
              type="text"
              placeholder="Enter Your PAN"
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="employeeType"
            >
              Employee Type
            </label>
            <select
              onChange={(e) => handleOnChange("employeeType", e.target.value)}
              name="employeeType"
              id="employeeType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="joiningDate"
            >
              Employee Type
            </label>
            <DatePicker
              selected={new Date()}
              onChange={(e) => handleOnChange("joiningDate", e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
