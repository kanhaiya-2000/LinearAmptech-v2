import React from "react";
import { BgElement1, BgElement2 } from "../../../assets";
import { Footer, Header } from "../../../Components";

const LAMP4 = () => {
  return (
    <div>
      <Header />
      {/* *****************************CONTENT SECTION***************** */}

      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed mb-10">
        {" "}
        <div className="w-[100vw] overflow-hidden ">
          <BgElement1 className="w-[200px] absolute origin-center -right-20 " />
        </div>
        <h2 className="text-[3rem] font-bold mb-5">
          Power Amplifier: LAMP-PAMOCCF-10W
        </h2>
        <p className="font-semibold text-[1.5rem]">
          50 Ω, Wideband, 0.5 to 2.2 GHz, 10 W, 28V, SMA.
        </p>
        <div className="flex justify-between">
          <div className="w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5">Key Features</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li> Frequency:0.5-2.2GHz</li>
              <li> Drain efficiency: 60-71%</li>
              <li> Output power: 41.3-42.7dBm</li>
              <li> Gain at saturation:8-9.4 dB</li>
              <li> Gain Compression:3-4 dB</li>
              {/* <li> C/IMD3,{"< "} -28 dBc at 3dB back-off of output power</li> */}
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Applications</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li> Defense</li>
              <li>Cellular</li>
              <li> SDRs</li>
              <li>Radars</li>
            </ul>
          </div>
          <div className="rightBox w-[50%] flex p-20">
            <div className="fronBox h-[400px] w-[500px] bg-primary-color"></div>
            <div className="backBox absolute h-[400px] w-[500px] bg-[#EFF6FF] translate-x-5 translate-y-5 flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMOCCF4.png")}></img>
            </div>
          </div>
        </div>
        <div>
          <BgElement2 className="w-[300px] absolute origin-center -left-44 -translate-y-[30%]" />
        </div>
        <div className="text-[1.8rem] font-bold mt-5 mb-10">Diagrams</div>
        <div className="imgContainer flex flex-col gap-24">
          <div className="flex gap-20 justify-center">
            <div className="w-[550px] h-[500px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMOCCF1.png")}></img>
            </div>
            <div className="w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMOCCE4.png")}></img>
            </div>
          </div>
          <div className="flex gap-20 justify-center">
            <div className="w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMOCCF2.png")}></img>
            </div>
            <div className="w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMOCCF3.png")}></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LAMP4;
