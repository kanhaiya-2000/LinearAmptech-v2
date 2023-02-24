import React from "react";
import { Footer, Header } from "../../Components";

const SDR = () => {
  return (
    <div>
      <Header />
      {/* *****************************HERO SECTION***************** */}

      <div className="heroSection z-0  h-[400px] overflow-hidden ">
        <div className="absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2 text-white">
          <h2 className="text-[4rem] font-bold font-Roboto">Our Products</h2>
          <p className="text-[1.5rem] font-mnormal mb-4">
            Solutions for a smarter, more connected
          </p>
        </div>
        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%] -translate-y-64"
        ></img>
      </div>
      {/* *****************************CONTENT SECTION***************** */}
      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed">
        <h2 className="text-[2rem] font-bold mb-10">
          Software Defined radio for base stations and Point to Point Radio
          Applications
        </h2>
        <div className="flex justify-between">
          <div className="w-[45%]">
            With the advent of Software Defined Radio (SDR) the radio hardware
            scaled down to software and most of the features is pushed into
            software. In the scenario of war, the communication significantly
            depends on flexibility, interoperability, accuracy, and promptness.
            SDR having digital control and algorithms developed by us to
            compensate hardware imperfection apart from baseband can effectively
            increase flexibility, interoperability, accuracy, and promptness.
            Therefore in the scenario of conflict it can use as communication
            repeater. Moreover the conventional equipment supports defense
            personnel the ability to adjust only one frequency and single
            protocol. With the help of the SDR, defense personnel are able to
            monitor and communicate over an enormous percentage of the spectrum
            and support multiple protocols.
          </div>
          <div className="w-1/2">
            <img
              src={require("../../assets/SDR/1.jpg")}
              className="border-2 border-black"
            ></img>
            <p className="text-center mt-1">
              SDR based transceiver for point to point radio communication
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SDR;
