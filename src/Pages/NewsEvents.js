import Header from "../Components/Header";

import Footer from "../Components/Footer";

const data = [
  {
    title:
      "We featured on Engineers Tribune. Their partner website is Peigenesis.",
    date: "21 July 2020",
  },
  {
    title:
      "Dr. Meenakshi Rawat has presented paper titled, “Linear Vector Signal Generator for X-band Communication” in Radio & Wireless Week, San Antonio, Texas, U.S.A.",
    date: "29 January 2020",
  },
  {
    title: `Dr. Meenakshi Rawat has delivered lecture under workshop on :Machine Learning and Dimensionality Reduction Techniques for RF Components and Systems: from Modeling to Linearization" Radio & Wireless Week, San Antonio, Texas, U.S.A.`,
    date: "26 January 2020",
  },
  {
    title: `Dr. Meenakshi Rawat was instructor and co-coordinator for Training Program on " Basics of software Defined Radio Architectures and building blocks of SDR Waveform development for SDR " in Bharat Electronics Limited, Bangalore 2019.`,
    date: "5-16 July 2019",
  },
  {
    title:
      "Product showcased in two-day event ‘ICT & IOT START UP TECH EXPO 2018' at ITI Limited, Doorvaninagar, Bangalore-560016. Product showcased in C-DOT foundation day ' 5G Technologies, Standardization, Business and applications",
    date: "28-29 August 2018",
  },
  {
    title:
      "Dr. Karun Rawat has organized a workshop on “Advanced Applications of Nonlinear Vector Network Measurements for broadband RF Power Amplifiers Design and Linearization” in International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    title:
      "Dr. Karun Rawat has been invited for a talk on “Bandwidth and Efficiency Enhancement Schemes in Radio Frequency Power Amplifiers” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    title:
      "Dr. Meenakshi Rawat has been invited for a talk on “Multiband/Multichannel Power Amplifier Linearization” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    title:
      "Dr. Meenakshi Rawat has been invited for a talk on “Linearization of Broadband PA and Wireless Transmitters for 5G Applications” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    title:
      "Girish Chandra Tripathi was awarded Young Scientiest Award in the 12th Uttarakhand State Science and Technology Congress 2017-18 on 07-08 March at UCOST, Vgyan Dham Dehardun on 22nd May 2018.",
    date: "8 March 2018",
  },
  {
    title:
      "Hon'ble Prime Minister has interacted with startups from across India, Dr. Meenakshi Rawat has attended the event on behalf of Linearized amplifier technologies and services private limited",
    date: "06 June 2018",
  },
  {
    title:
      "Congratulations to Dr. Meenakshi Rawat on paper “2-D Curtailed Harmonic Memory Polynomial for reduced complexity in Concurrent Dual-Band Modeling and Digital Predistortion with the second band at Harmonic Frequency,” IET Commun., to be published. DOI: 10.1049/iet-com.2017.1376.",
    date: "",
  },
  {
    title: `Congratulations to Dr. Meenakshi Rawat on paper, "Low cost RF in -RF out predistorter linearizer for high power amplifier and ultra-wideband signals" IEEE Trans. Instrum. Meas. (accepted).doi: 10.1109/TIM.2018.2811420`,
    date: "06 June 2018",
  },
  {
    title:
      "Congratulations to Dr. Meenakshi Rawat on paper, “Complexity Reduced Digital Predistortion Model for MIMO Transmitters”, has been accepted for presentation at IMS2018.",
    date: "June 2018",
  },
  {
    title: `Congratulations to Dr. Meenakshi Rawaton paper, "RF in -RF out Linearizer System Design for Satellite Communication," IEEE Transactions on Electron Devices, vol. 65, no. 6, pp. 2378-2384`,
    date: "06 June 2018",
  },
  {
    title:
      "Congratulations to Dr. Karun Rawat on paper, “A Wideband Rat-race Coupler Using Stepped Impedance Resonator,” accepted in IEEE International Wireless Symposium, Chengdu, China.",
    date: "May 2018",
  },
  {
    title: `Congratulations to Dr. Meenakshi Rawat on paper, "RF Front-End Flexibility, Self-Calibration, and Self-Linearization: Characterizing and Mitigating Nonlinearities in SDR MIMO Systems for Concurrent Multiband Operation," IEEE Microwave Magazine, vol. 19, no. 2, pp. 49-61.`,
    date: "March-April 2018",
  },
  {
    title: `Congratulations to Dr. Karun Rawat on paper, "A Design Strategy for Bandwidth Enhancement in Three-stage Doherty Power Amplifier with Extended Dynamic Range", IEEE Transactions on Microwave Theory and Techniques, vol. 66, no. 2, pages: 1024-1033.`,
    date: "Feb 2018",
  },
  {
    title:
      "Congratulations to Dr. Karun Rawat on paper, “Quadrature modulation using radio frequency wave correlation in multiport network,” 5th IEEE International Conference on Signal Processing and Integrated Networks (SPIN), New Delhi, India.",
    date: "May 2018",
  },
];

const NewsEvents = () => {
  return (
    <div>
      <Header />

      <div>
        <div className="h-[429px] bg-[#0465F8] w-[100%] flex justify-center items-center">
          <div className=" ">
            <p className="font-bold text-[64px] text-white text-center">
              News and Events
            </p>
            <p className="text-[24px] text-white font-medium text-center">
              Solutions for a smarter, more connected future
            </p>
          </div>
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            {data
              ? data.map(({ title, date }) => {
                  return (
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                      <div className="lg:flex border w-[594px]">
                        <img
                          className="object-cover w-full h-[100%]  lg:w-64"
                          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <a
                            href="#"
                            className="text-xl font-semibold text-black   "
                          >
                            {title ? title : "Title"}
                          </a>

                          <span className="text-sm text-gray-500 dark:text-gray-300">
                            On: {date ? date : "Date"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "1"}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NewsEvents;
