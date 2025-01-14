import React, { useEffect } from "react";
import { Footer, Slider } from "../Components";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import video1 from "../assets/video/1.mp4";
import {
  BgElement1,
  BgElement2,
  BgElement3,
  BgElement4,
  Element1,
  Element2,
  Element3,
} from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="font-Inter">
      <Header />

      {/* *********************Hero Section ****************************** */}

      <div className="heroSection gap-2  lg:max-h-[88vh] flex flex-col justify-center items-center text-white z-0 overflow-hidden ">
        {/* <div className=" bg-slate-600 z-10"></div> */}
        <video autoPlay muted loop src={video1} className="z-10" />
        <div className="absolute w-[100%] lg:p-20 pb-4 gap-3  overflow-hidden z-10 flex flex-col justify-center items-center leading-relaxed">
          <h2 className=" lg:text-[5rem] md:text-4xl text-3xl font-bold drop-shadow-2xl bg-transparent">
            Linear AmpTech
          </h2>
          <p className="lg:text-[2rem] text-xl font-normal lg:mb-5 lg:mt-6 text-center">
            Creating Difference With Technology
          </p>
          <NavLink
            className=" lg:border-[3px] border-2 border-white text-white lg:text-[1.1rem] lg:py-3 lg:px-5 hover:scale-110 duration-300 py-2 px-3 text-base "
            to="/about-us"
          >
            Read more
          </NavLink>
        </div>
      </div>

      {/* *********************Intro Section****************************** */}

      <div className="introSection gap-16   lg:flex justify-center items-end px-[10%] lg:h-[100vh] lg:pb-16 pt-20">
        <div className="flex justify-center items-center">
          <div className="lg:flex flex-col gap-10">
            <h2 className="lg:text-[2.5rem] md:text-[2.10rem] text-[1.6rem] font-bold text-center lg:text-left leading-relaxed">
              We're Delivering Only
              <br /> Exceptinal Quality Work
            </h2>
            <Element3 className="lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] h-[300px] w-[300px] m-auto" />
          </div>
        </div>
        <div className=" lg:w-[40%] mb-20">
          <p className=" lg:text-[1.1rem] text-[1rem] font-medium leading-loose mb-2 ">
            The linearized amplifier technologies and services private limited
            (linear-amptech) is a start-up company formed by faculty and
            students of IIT Roorkee. The company is dedicated towards indigenous
            development of radio frequency front end and wireless solutions. The
            primary goal is to develop tangible product from in-house R&D and
            bring it to national as well as international market.
          </p>
          <NavLink
            to="/about-us"
            className="font-semibold lg:text-[1.1rem] text-[1rem] "
          >
            Read more
          </NavLink>
        </div>
      </div>
      <div
        className="w-[100vw] absolute overflow-hidden h-[200px] -translate-y-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="lg:w-[200px] w-[150px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div>
      {/* *********************Intro ****************************** */}

      <div className="slider lg:w-[98.9vw] max-w-[98.9vw] lg:px-[7%] px-4 py-14 bg-[#F2F2F2] mt-28">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center">
          Our Products
        </h2>
        <Slider />
      </div>
      {/* *********************Innovation ****************************** */}

      <div className="innovation w-[100%] px-[10%] py-32 lg:flex xl:flex justify-center gap-20">
        <div className="max-w-[650px] lg:flex lg:flex-col gap-5 px-4">
          <p className="tag text-[#0346B5] text-[1.1rem] font-semibold">
            INNOVATIONS
          </p>
          <h2 className="lg:text-[2.5rem] text-3xl font-bold">Cloud Project</h2>
          <p className=" lg:text-[1.1rem] text-base leading-loose min-h-[200px] min-w-[200px] ">
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
        <div className="flex justify-center">
          <Element1 className="lg:h-[450px] h-[320px] m-auto" />
        </div>
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="lg:w-[300px] w-[200px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>

      {/* *********************Service ****************************** */}
      <div className="lg:flex max-w-[100%] lg:px-[10%] py-32 gap-20 bg-[#F2F2F2] px-4">
        <div className="lg:left lg:w-1/2 mt-10">
          <div className="upperPart flex">
            <div className="serviceHeading lg:text-[2.5rem] text-3xl font-bold w-[300px] mb-14">
              Services We’re
              <br /> Offering
            </div>

            <div className="lineStyle h-[6px] lg:w-[335px] w-[100px]  bg-primary-color relative top-7"></div>
          </div>
          <div className="flex justify-center">
            <Element2 className="lg:h-[450px] md:max-w-[400px] max-w-[350px]  " />
          </div>
        </div>
        <div className="right lg:w-1/2 lg:flex flex-col gap-7 px-4">
          <div className="imgLower h-[400px] w-[100%] flex justify-center items-center  overflow-hidden">
            <BgElement4 className="lg:h-[450px] md:max-w-[400px] max-w-[350px]  " />
          </div>
          <div className="text-[1.1rem] flex flex-col gap-4 leading-loose ">
            <p>
              We provide services in various areas of technology, including
              power amplifier design, radio frequency engineering and signal
              processing, IoT and cloud analytics, and cyber-physical systems
              development.We design advanced power amplifiers and sensors which
              can be deployed in different areas ,say,Traffic monitoring ,
              equipment analysis etc.
              <br /> we are committed to providing our clients with innovative
              solutions that meet their unique needs.
            </p>
          </div>
          <NavLink
            to="/innovations"
            className="bg-primary-color text-white text-[1.1rem] py-3 px-5 w-44 flex justify-center items-center hover:scale-110 duration-200 mt-4 lg:mt-0"
          >
            Discover more
          </NavLink>
        </div>
      </div>
      <div className="max-w-[100vw]  ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="lg:w-[300px] w-[200px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div>

      {/* *********************AboutUs ****************************** */}
      <div className="aboutUs w-[100%] px-[10%] flex flex-col justify-center items-center gap-5 py-14 bg-primary-color text-white">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center">
          About Us
        </h2>
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
