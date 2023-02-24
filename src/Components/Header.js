import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800 z-100 ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                className="w-auto h-10 sm:h-16 sm:w-auto"
                src={require("../assets/logo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6 font-semibold gap-4">
              <NavLink
                className="my-2 text-gray-700  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                to="/innovations"
              >
                Innovations
              </NavLink>

              <div
                onMouseEnter={() => setIsDropDownOpen(true)}
                onMouseLeave={() => setIsDropDownOpen(false)}
                className="my-2 text-gray-700 transition-colors duration-300 transform md:mx-4 md:my-0"
                // to="/products"
              >
                Products
                {isDropDownOpen && (
                  <div className="absolute w-[300px]  bg-white list-none">
                    <li className=" py-4 border-b cursor-pointer shadow-sm outline-1 px-3">
                      <NavLink
                        className="hover:text-blue-500"
                        to="/products/rf-power-amplifiers"
                      >
                        RF Power Amplifiers
                      </NavLink>
                    </li>
                    <li className=" py-4 border-b cursor-pointer shadow-sm outline-1 px-3">
                      <NavLink
                        className="hover:text-blue-500"
                        to="/products/software-defined-radio"
                      >
                        Software Defined Radio
                      </NavLink>
                    </li>
                    <li className=" py-4 border-b cursor-pointer shadow-sm outline-1 px-3">
                      <NavLink
                        className="hover:text-blue-500"
                        to="/products/rf-linear-nonlinear-characterization"
                      >
                        RF linear and nonlinear characterization
                      </NavLink>
                    </li>
                    <li className=" py-4 border-b cursor-pointer shadow-sm outline-1 px-3">
                      <NavLink
                        className="hover:text-blue-500"
                        to="/products/power-amplifier-linearization"
                      >
                        Power amplifier linearization
                      </NavLink>
                    </li>
                  </div>
                )}
              </div>

              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                to="/news-and-events"
              >
                News & Events
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                to="/about-us"
              >
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
