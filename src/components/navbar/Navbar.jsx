import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
const Navbar = () => {
  return (
    <div className="navbar bg-[#A1D6E2]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#1995AD] font-bold " : " text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addbook"
                className={({ isActive }) =>
                  isActive ? "text-[#1995AD] font-bold " : "text-black"
                }
              >
                ADDBOOKS
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">
          Book<span className="text-[#1995AD]">Nest</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#1995AD] font-bold " : " text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addbook"
              className={({ isActive }) =>
                isActive ? "text-[#1995AD] font-bold " : "text-black"
              }
            >
              ADDBOOKS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <Button
            txt="Login"
            styles="bg-[#1995AD] px-4 py-2 rounded-xl text-white hover:bg-transparent hover:text-black"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
