import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

export const Addemployee = () => {
  const [name, setName] = useState("");
  const [emailId, setEmail] = useState("");
  const [adharNumber, setAadharNumber] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [joiningDate, setJoinDate] = useState(new Date());
  const [employeeType, setEmployee] = useState("");
  const { addEmployee, employees } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      emailId,
      adharNumber,
      panNumber,
      employeeType,
      joiningDate,
    };
    addEmployee(newEmployee);
    history.push("/");
  };

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="adharNumber"
            >
              Aadhar Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={adharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
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
              PAN Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={panNumber}
              onChange={(e) => setpanNumber(e.target.value)}
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
              onChange={(e) => setEmployee(e.target.value)}
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
              selected={joiningDate}
              onChange={(date) => setJoinDate(date)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Employee
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
