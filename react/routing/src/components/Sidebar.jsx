import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{ width: "250px" }}
      >
        <h4 className="mb-4">My Sidebar</h4>

        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <a href="#" className="nav-link text-white active">
              Dashboard
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Users
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Orders
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
