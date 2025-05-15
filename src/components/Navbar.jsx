import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

function Navbar() {
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-800 text-lg font-semibold"
              : "text-lg font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-books"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-800 text-lg font-semibold"
              : "text-lg font-semibold"
          }
        >
          My-Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-800 text-lg font-semibold"
              : "text-lg font-semibold"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-800 text-lg font-semibold"
              : "text-lg font-semibold"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 shadow-sm px-4 md:px-6 lg:px-10 xl:px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold flex items-center gap-2">
          <img className="w-7" src={logo} alt="Dr. Hub" />
          Dr.Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-3xl ">Emergency</a>
      </div>
    </div>
  );
}

export default Navbar;
