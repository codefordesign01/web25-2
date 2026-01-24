import React from "react";
import { Outlet , Link, NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="woman">
                  Woman
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="man">
                  Man
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
