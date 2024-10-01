import React from "react";
import { GiDeerHead } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Navbar({isLoggedIn,onLogout}) {
  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center m-2 bg-yellow-50">
      <div className="flex flex-row ml-4 justify-between items-center  text-blue-900 hover:text-red-800 hover:scale-110 transition-all duration-300 ">
        <GiRunningNinja className="size-20" />
        <h1 className="text-2xl font-bold">Ninja Code</h1>
      </div>

      <div>
        <Link
          to="/"
          className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
        >
          Home
        </Link>

        <Link
          to="/about"
          className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
        >
          About
        </Link>

        <Link
          to="/contact"
          className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
        >
          Contact
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
            >
              Profile
            </Link>
            <button
              onClick={onLogout}
              className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="mr-4 p-2 rounded-md text-white bg-blue-900 hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 hover:scale-110 "
          >
            Login
          </Link>
        )}
      </div>

      <div className="mt-5 md:mt-0 pr-0 lg:pr-10 ">
        <GiDeerHead className="size-20  text-blue-900 hover:text-red-800 hover:scale-110 transition-all duration-300" />
      </div>
    </nav>
  );
}
