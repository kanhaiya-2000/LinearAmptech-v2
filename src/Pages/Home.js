import React from "react";
import { Footer, Slider } from "../Components";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import video1 from "../assets/video/1.mp4";

const Home = () => {
  return (
    <div className="font-Inter">
      <Header />

      {/* *********************Hero Section ****************************** */}

      <div className="heroSection gap-2  h-[88vh] flex flex-col justify-center items-center text-white z-0 overflow-hidden">
        {/* <div className=" bg-slate-600 z-10"></div> */}
        <video autoPlay muted loop src={video1} className="z-10" />
        <div className="absolute w-[100%] h-[50vh] z-50 flex flex-col justify-center items-center">
          <h2 className=" text-[5rem] font-bold drop-shadow-2xl">
            Linear AmpTech
          </h2>
          <p className="text-[2rem] font-mnormal mb-6 ">
            Creating Difference With Technology
          </p>
          <NavLink
            className=" border-[3px] border-white text-white text-[1.1rem] py-3 px-5 hover:scale-110 duration-300"
            to="/about-us"
          >
            Read more
          </NavLink>
        </div>
      </div>

      {/* *********************Intro Section****************************** */}

      <div className="introSection gap-0  flex justify-center items-center px-[10%] h-[100vh] pb-10">
        <div className="flex justify-end items-end translate-x-28">
          <div className="flex flex-col gap-5">
            <h2 className="text-[2.5rem] font-bold">
              We're Delivering Only
              <br /> Exceptinal Quality Work
            </h2>
            <div className="img h-[400px] w-[550px] bg-gray-300"></div>
          </div>
          <div className="h-[170px] w-[300px] flex justify-between items-center px-12 bg-[#0346B5] relative -translate-x-40 translate-y-20">
            <div className="count text-white flex flex-col justify-center items-center gap-1">
              <p className="">Count</p>
              <p className="text-[2.5rem] font-bold">2k+</p>
            </div>
            <div className="count text-white flex flex-col justify-center items-center gap-1">
              <p className="">Count</p>
              <p className="text-[2.5rem] font-bold">2k+</p>
            </div>
          </div>
        </div>
        <div className="relative -translate-x-28">
          <p className=" text-[1.1rem] font-medium leading-loose mb-2 ">
            The linearized amplifier technologies and services private limited
            (linear-amptech) is a start-up company formed by faculty and
            students of IIT Roorkee. The company is dedicated towards indigenous
            development of radio frequency front end and wireless solutions. The
            primary goal is to develop tangible product from in-house R&D and
            bring it to national as well as international market.
          </p>
          <NavLink to="/about-us" className="font-semibold text-[1.1rem]">
            Read more
          </NavLink>
        </div>
      </div>
      {/* *********************Intro ****************************** */}

      <div className="slider w-[98.9vw] px-[7%] py-14 bg-[#F2F2F2]">
        <h2 className="text-[2.5rem] font-bold text-center">Our Products</h2>
        <Slider />
      </div>
      {/* *********************Innovation ****************************** */}

      <div className="innovation w-[100%] px-[10%] py-32 flex justify-center gap-20">
        <div className="w-[650px] flex flex-col gap-5">
          <p className="tag text-[#0346B5] text-[1.1rem] font-semibold">
            INNOVATIONS
          </p>
          <h2 className="text-[2.5rem] font-bold">Cloud Project</h2>
          <p className=" text-[1.1rem] leading-loose h-[200px]">
            We focus on the use of IOT data to provide companies with real-time
            observability to increase efiiciency, reduce costs predict possible
            faults and analyse the root of faults.
          </p>
          <NavLink
            to="/innovations"
            className="text-blue-700 underline font-medium cursor-pointer"
          >
            Discover more
          </NavLink>
        </div>
        <div className="right h-[400px] w-[550px] bg-gray-300">
          <img src={require("../assets/iot.jpg")}></img>
        </div>
      </div>

      {/* *********************Service ****************************** */}
      <div className="flex w-[100%] px-[10%] py-32 gap-20 bg-[#F2F2F2]">
        <div className="left w-1/2 mt-10">
          <div className="upperPart flex">
            <div className="serviceHeading text-[2.5rem] font-bold w-[300px] mb-14">
              Services We’re
              <br /> Offering
            </div>
            <div className="lineStyle h-[6px] w-[335px]  bg-primary-color relative top-7"></div>
          </div>
          <div className="imgLower h-[400px] w-[100%] bg-gray-300"></div>
        </div>
        <div className="right w-1/2 flex flex-col gap-7">
          <div className="imgLower h-[400px] w-[100%] bg-gray-300"></div>
          <div className="text-[1.1rem] flex flex-col gap-4">
            <p>
              Vivamus blandit est vitae nisi pellentesque blandit. Donec
              sagittis tempor sem, eu maximus lacus egestas ut. Vestibulum et
              magna dictum
            </p>
            <p>
              Morbi porttitor neque lacus, in cursus diam suscipit nec.
              Phasellus odio nulla, gravida et odio sed, congue.
            </p>
          </div>
          <NavLink
            to="/innovations"
            className="bg-primary-color text-white text-[1.1rem] py-3 px-5 w-44 flex justify-center items-center hover:scale-110 duration-200"
          >
            Discover more
          </NavLink>
        </div>
      </div>

      {/* *********************AboutUs ****************************** */}
      <div className="aboutUs w-[100%] px-[10%] flex flex-col justify-center items-center gap-5 py-14 bg-primary-color text-white">
        <h2 className="text-[2.5rem] font-bold text-center">About Us</h2>
        <p className="text-[1.1rem] leading-loose text-center">
          a technology service company that provides innovative solutions to
          help businesses stay ahead of the curve. We specialize in [list your
          main services], and our team of experts is dedicated to providing the
          best possible service to our clients. We believe in the power of
          technology to transform businesses and industries. We are passionate
          about using our skills and knowledge to help our clients harness the
          full potential of technology to achieve their goals.
        </p>
        <NavLink
          to="/about-us"
          className="bg-primary-color text-white text-[1.1rem] py-3 px-6 border-2 border-white hover:scale-105 duration-100"
        >
          Read more
        </NavLink>
      </div>
      {/* *********************Footer ****************************** */}
      <Footer />
    </div>
  );
};

export default Home;
