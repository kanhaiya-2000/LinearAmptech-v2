import React from "react";
import { Footer, Header } from "../Components";
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
            className="w-full bg-center bg-cover h-[755px]"
            style={{
              backgroundColor: " #0465F8",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-white lg:text-[64px] leading-snug">
                  Build your new Project
                </h1>
                <h1 className="text-4xl font-semibold text-white lg:text-[64px] leading-snug">
                  some other text
                </h1>

                <button className="w-[148.8px] h-[47px] px-5 py-2 mt-4 text-[18.8px]  text-[#0465F8] hover:scale-110  capitalize transition-colors duration-300 transform bg-white rounded-none lg:w-auto ">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* middle */}
      <div className="mt-10 ">
        <section className="bg-white dark:bg-gray-800 lg:pt-12 pb-0 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-none ">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                  width: "588px",
                  height: "480px",
                }}
              ></div>
            </div>

            <div className="max-w-xl pl-12 py-12 lg:max-w-5xl lg:w-1/2">
              <div class="lineStyle h-[6px] w-[111px] bg-[#0465f8] relative top-7 left-1/2"></div>
              <h2 className="text-[40px] font-semibold text-black  ">
                About us
              </h2>

              <p className="mt-4 text-[20px] text-black  ">
                Linear Amplifier Technology & Services private ltd (Linear
                Amp-tech) is a company formed and driven by innovative minds of
                Indian I.I.T Roorkee. The company is Incubated in I.I.T Roorkee
                and includes students and professors on the board of directors.
                The company is focused on innovation to cater to various
                technical challenges in the area of Electronics and Software
                Engineering.
              </p>

              <button className="w-[148.8px] h-[47px] bg-[#0465F8] px-5 py-2 mt-4 text-[18.8px]  text-white  transition-colors hover:scale-110  duration-300 transform bg-[#0465F8]rounded-none lg:w-auto ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 lg:pb-12 pt-0 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-none ">
            <div className=" px-0 py-12 ">
              <p className="mt-0 text-black  text-[20px] ">
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
              <p className="mt-0 text-black  text-[20px]">
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

      {/* we build awesome products */}
      <div className="h-[893px] bg-[#292C33] w-screen flex justify-center flex-col align-end items-center ">
        <div className="py-16 mt-40">
          <h1 className="text-white text-[48px] font-semibold text-center">
            We build awesome products
          </h1>
        </div>
        <div className="flex text-[16px] ">
          <div className="h-[282px] w-[477px] bg-[#48484A] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">Product Heading</h1>
            <p className="mt-4">
              Vestibulum volutpat ante id rhoncus interdum. Morbi porttitor
              neque lacus, in cursus diam suscipit nec. Phasellus odio null
              posuere viverra erat. Proin vestibulum facilisis libero in
              porttitor. Maecenas et fermentum felis.
            </p>
            <button className="w-[114px] h-[36px]  px-5   mt-4 text-[14px] border border-white text-white  transition-colors duration-300 transform bg-[#0465F8]rounded-none lg:w-auto hover:scale-110  ">
              Read more
            </button>
          </div>
          <div className="h-[282px] w-[477px] bg-white"></div>
        </div>

        <div className="flex">
          <div className="h-[282px] w-[477px] bg-white"></div>{" "}
          <div className="h-[282px] w-[477px] bg-[#0465F8] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">Product Heading</h1>
            <p className="mt-4">
              Vestibulum volutpat ante id rhoncus interdum. Morbi porttitor
              neque lacus, in cursus diam suscipit nec. Phasellus odio null
              posuere viverra erat. Proin vestibulum facilisis libero in
              porttitor. Maecenas et fermentum felis.
            </p>
            <button className="w-[114px] h-[36px]  px-5   mt-4 text-[14px] border border-white text-white  transition-colors duration-300 transform bg-[#0465F8]rounded-none lg:w-auto hover:scale-110 ">
              Read more
            </button>
          </div>
        </div>

        <div className="flex">
          {" "}
          <div className="h-[282px] w-[477px] bg-[#48484A] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">Product Heading</h1>
            <p className="mt-4">
              Vestibulum volutpat ante id rhoncus interdum. Morbi porttitor
              neque lacus, in cursus diam suscipit nec. Phasellus odio null
              posuere viverra erat. Proin vestibulum facilisis libero in
              porttitor. Maecenas et fermentum felis.
            </p>
            <button className="w-[114px] h-[36px]  px-5   mt-4 text-[14px] border border-white text-white  transition-colors duration-300 transform bg-[#0465F8]rounded-none lg:w-auto hover:scale-110  ">
              Read more
            </button>
          </div>
          <div className="h-[282px] w-[477px] bg-white border-b border-r border-black"></div>
        </div>
      </div>
      {/* BOARD of Directors */}
      <div className="mt-80 mb-20">
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
              Board Of Directors
            </h1>

            <p className="max-w-2xl text-[20px] mx-auto my-6 text-center text-black ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center justify-around   border">
                <img
                  className="object-cover w-[100%] h-[auto] "
                  src={require("../assets/karun.png")}
                  alt=""
                />
                <div className="self-start m-4 justify-self-start">
                  <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                    Dr. Karun Rawat
                  </h1>

                  <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                    Founder & Chairman
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around   border">
                <img
                  className="object-cover w-[100%] h-[auto] "
                  src={require("../assets/minakshi.png")}
                  alt=""
                />
                <div className="self-start m-4 justify-self-start">
                  <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                    Dr. Minakshi Rawat
                  </h1>

                  <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                    Founder & Director
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around   border">
                <img
                  className="object-cover w-[100%] h-[auto] "
                  src={require("../assets/vivek.jpeg")}
                  alt=""
                />
                <div className="self-start m-4 justify-self-start">
                  <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                    Mr. Vivek Sharma
                  </h1>

                  <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                    Director
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around   border">
                <img
                  className="object-cover w-[100%] h-[auto] "
                  src={require("../assets/gowrish.jpg")}
                  alt=""
                />
                <div className="self-start m-4 justify-self-start">
                  <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                    Dr. Gowrish B
                  </h1>

                  <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                    Director
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Reddit"
                    >
                      <AiFillTwitterCircle size={26} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Facebook"
                    >
                      <BsFacebook size={22} />
                    </a>

                    <a
                      href="#"
                      className="mx-2 text-black  "
                      aria-label="Github"
                    >
                      <BsLinkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* GET to know */}
      <hr />
      <section className=" bg-[#0465F8]">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-[48px]  font-medium tracking-tight xl:text-3xl text-white">
            Get to know today!
          </h2>

          <div className="mt-8 lg:mt-0 ">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  hover:scale-110  font-semibold ">
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
