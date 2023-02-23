import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 text-slate-100 dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p class="font-semibold text-gray-100 dark:text-white">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-100 dark:text-white">
                Industries
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-100 dark:text-white">
                Services
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-100 dark:text-white">
                Contact Us
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +91 6354814759
                </a>
                <a
                  href="#"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  hello@linear-amptech.com
                </a>
                <p class="mt-4 text-md text-gray-100 sm:mt-0 dark:text-gray-300">
                  I-7, Tides Incubation Center, IIT Roorkee, Uttarakhand, India
                  247667
                </p>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img
                class="w-auto h-7 sm:h-12"
                src={require("../Assets/logo.png")}
                alt=""
              />
            </a>

            <p class="mt-4 text-sm text-gray-100 sm:mt-0 dark:text-gray-300">
              © Linear Amp-Tech 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
