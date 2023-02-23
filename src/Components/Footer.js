import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-slate-100 dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-100 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-100 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-100 dark:text-white">
                Services
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-100 dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +91 6354814759
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  hello@linear-amptech.com
                </a>
                <p className="mt-4 text-md text-gray-100 sm:mt-0 dark:text-gray-300">
                  I-7, Tides Incubation Center, IIT Roorkee, Uttarakhand, India
                  247667
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img className="w-auto h-7 sm:h-12" src={Logo} alt="" />
            </a>

            <p className="mt-4 text-sm text-gray-100 sm:mt-0 dark:text-gray-300">
              © Linear Amp-Tech 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
