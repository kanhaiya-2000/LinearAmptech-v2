import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";

const TempProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <Header />
      <div className="w-[100%] h-[100%]">
        <div className="absolute w-[100%] h-[100%] top-[35%]">
          <h2
            className="text-[5rem] font-bold font-Roboto drop-shadow-2xl text-center text-white "
            data-aos="fade"
            data-aos-duration="1000"
          >
            Elevate Your Life with <br />
            Our Products
          </h2>
        </div>
        <img src={require("../../assets/bg.png")} className="w-[100%]"></img>
      </div>
      <div className="text-[1.3rem] leading-relaxed px-[15%] text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          data-aos="fade-up"
        >
          Radio Frequency Design and Signal Processing
        </h2>
        <p className="my-10">
          The company has a strong research background in various RF components
          including Radio Frequency Power Amplifier Design, MMICs, Transmitter
          Linearization, SDR test beds and Radio frequency passive components.
        </p>
        <p>
          We are dedicated to innovating in the area of many active and passive
          radio frequency components. These include broadband high-power
          amplifiers, waveguide-based combining, cavity filters, etc. Some
          innovations are also added in terms of soft IPs to mitigate
          impairments in software-defined radios. We have a strong research
          background of some of our directors who are from I.I.T-Roorkee and
          working in cutting-edge technologies related to radio frequency
          components. Recent R&D includes intelligent reflecting surfaces,
          multi-octave GaN MMICs, and millimeter-wave RFICs in CMOS and SiGe
          BiCMOS.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>
      <div className="w-[100vw] overflow-hidden h-[100px]">
        <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[50%]" />
      </div>

      <div className="productContainer  w-[100%] text-[1.2rem] leading-relaxed">
        <div className="flex  justify-center gap-16 my-36 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl shadow-md">
            <img
              src={require("../../assets/RFlinear/p1.png")}
              className="w-[100%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Radio Frequency Passive Components
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5">
                Radio Frequency Power Amplifier
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl">
            <img
              src={require("../../assets/RFlinear/p2.png")}
              className="w-[90%]"
            ></img>
          </div>
        </div>
        <div className="w-[100vw] overflow-hidden">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[50%]" />
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={require("../../assets/RFlinear/p3.png")}
              className="w-[90%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5">GaN MMIC Designs</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5">SDR Test-Beds</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl">
            <img
              src={require("../../assets/RFlinear/p4.png")}
              className="w-[90%]"
            ></img>
          </div>
        </div>
        <div className="w-[100vw] overflow-hidden ">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={require("../../assets/RFlinear/p3.png")}
              className="w-[90%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5">
                Transmitter Linearization
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5">Antenna Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center">
            <img
              src={require("../../assets/RFlinear/p6.png")}
              className="w-[100%] rounded-2xl shadow-2xl"
            ></img>
          </div>
        </div>
      </div>

      <div className="text-white text-[1.3rem] leading-relaxed">
        <div className="absolute py-10 px-[12%] ">
          <h2 className="text-[3rem] font-bold text-center mb-10">
            What we focus
          </h2>
          <p className="">
            Linear Amplifier Technology & Services private ltd (Linear Amp-tech)
            is a company formed and driven by innovative minds of Indian I.I.T
            Roorkee. The company is Incubated in I.I.T Roorkee and includes
            students and professors on the board of directors.
            <br />
            <br /> The company is focused on innovation to cater to various
            technical challenges in the area of Electronics and Software
            Engineering. The company is geared up to take on new technology
            development projects in the relevant areas. The company is primarily
            focusing on various aspects of cyber-physical system design
            including radio-frequency sensors development and addressing the
            cyber domain with Artificial intelligence and Machine Learning. The
            company also envisages the requirement for the specialized
            technology areas such as Radio-frequency design and hence is
            committed to the development of radios and related components to
            address the immediate needs of country’s self-reliance drive.
            <br />
            <br /> The vision is to foster R&D into product design and
            development competing with cutting-edge technologies for the
            national and international market. The R&D is backed by the know-how
            generated from academics and is therefore capable of embarking new
            and advanced technology into products. <br />
            <br />
            We are dedicated to exploring new technologies in our core product
            areas and have established a good ecosystem between academics and
            industry for technology development with innovation. We have a
            strong team with I.I.T background who are continuously innovating
            new technology solutions for the company. We believe in continuous
            innovation for bringing cutting-edge technologies to the market.
          </p>
        </div>
        <div className="h-[800px] overflow-hidden ">
          <img
            src={require("../../assets/product-focus-bg.png")}
            className="w-[100%]"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TempProduct;