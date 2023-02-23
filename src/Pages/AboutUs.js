import React from "react";
import { Footer, Header } from "../Components";
import karun from "../assets/karun.png";
import vivek from "../assets/vivek.jpeg";
import minakshi from "../assets/minakshi.jpg";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="">
      <Header />
      {/* firt section */}
      <div>
        <header>
          <div
            className="w-full bg-center bg-cover h-[40rem]"
            style={{
              backgroundImage:
                " url(https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3173&q=80)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-white lg:text-4xl">
                  Build your new Project <br />
                  some other text
                </h1>

                <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* middle */}
      <div className=" ">
        <section className="bg-gray-100 dark:bg-gray-800 lg:pt-12 pb-0 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md ">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
                About us
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-300 tracking-wide">
                Linear Amplifier Technology & Services private ltd (Linear
                Amp-tech) is a company formed and driven by innovative minds of
                Indian I.I.T Roorkee. The company is Incubated in I.I.T Roorkee
                and includes students and professors on the board of directors.
                The company is focused on innovation to cater to various
                technical challenges in the area of Electronics and Software
                Engineering.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-500 rounded-md hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 lg:pb-12 pt-0 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md ">
            <div className=" px-6 py-12 ">
              <p className="mt-0 text-gray-500 dark:text-gray-300 tracking-wide">
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
              </p>
              <p className="mt-0 text-gray-500 dark:text-gray-300 tracking-wide">
                The company also envisages the requirement for the specialized
                technology areas such as Radio-frequency design and hence is
                committed to the development of radios and related components to
                address the immediate needs of country’s self-reliance drive.
                The vision is to foster R&D into product design and development
                competing with cutting-edge technologies for the national and
                international market. The R&D is backed by the know-how
                generated from academics and is therefore capable of embarking
                new and advanced technology into products.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* fetuses area */}
      {/* <section className="bg-white dark:bg-gray-900 mb-6">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Easiest way to create your website
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">Clean and Simple Layout</span> 
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">Just Copy Paste Codeing</span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">Easy to Use</span>
                </p>
              </div>
            </div>

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Join Us
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </section> */}

      {/* we build awesome products */}
      <div className="bg-black m-20">
        <section className="bg-gray-100 dark:bg-gray-800  lg:flex lg:justify-center ">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-4xl rounded-none lg:w-full lg:shadow-md ">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
            </div>

            <div className="max-w-xl bg-slate-800 text-slate-50 px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <p className="mt-4 text-gray-100 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm border text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800  lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-4xl rounded-none lg:w-full lg:shadow-md ">
            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800  lg:flex lg:justify-center mb-10">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-4xl rounded-none lg:w-full lg:shadow-md ">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 bg-slate-800">
              <p className="mt-4 text-gray-100 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 border"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* BOARD of Directors */}
      <div>
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                Board Of Directors
              </h1>

              <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                incidunt ex placeat modi magni quia error alias, adipisci rem
                similique, at omnis eligendi optio eos harum.
              </p>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={minakshi}
                    alt=""
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                    Dr Minakshi Rawat
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Founder & Director
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={karun}
                    alt=""
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                    Dr. Karun Rawat
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Founder & Chairman
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={vivek}
                    alt=""
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                    Mr. Vivek Sharma
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Investment Management
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vivek-sharma-986950121/"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* GET to know */}
      <hr />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Join us and get the update from anywhere
          </h2>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
