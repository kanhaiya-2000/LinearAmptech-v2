import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Team = () => {
  return (
    <div>
      <Header />
      <div className="h-[429px] bg-[#0465F8] w-[100%] flex justify-center items-center">
        <div className=" ">
          <p className="font-bold text-[64px] text-white text-center">
            Meet Our Team
          </p>
          <p className="text-[24px] text-white font-medium text-center">
            Solutions for a smarter, more connected future
          </p>
        </div>
      </div>
      <div>
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
      {/* teams member  */}
      <div className="mt-10">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Other Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/kanhaiya.jfif")}
                    alt=""
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Kanhaiya Kumar
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/kanhaiya-kumar-1ba2b81a1/"
                        className="mx-2 text-black  "
                        aria-label="Github"
                      >
                        <BsLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/suyash.jfif")}
                    alt="Dr Karun Rawat"
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Suyash Jain
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/jainsuyash/"
                        className="mx-2 text-black  "
                        aria-label="Github"
                      >
                        <BsLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/achal.jfif")}
                    alt=""
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Achal Talati
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/achal-talati-45a9631b2/"
                        className="mx-2 text-black  "
                        aria-label="Github"
                      >
                        <BsLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/devansh.jfif")}
                    alt=""
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Devansh Joshi
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px] group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/jdevansh/"
                        className="mx-2 text-black  "
                        aria-label="Github"
                      >
                        <BsLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/vishu.jfif")}
                    alt=""
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Vishu Saxena
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px] group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/vishu-saxena-73432818b/"
                        className="mx-2 text-black  "
                        aria-label="Github"
                      >
                        <BsLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
                  <img
                    className="object-cover w-[148px] h-[164px] "
                    src={require("../assets/aditya.jfif")}
                    alt=""
                  />
                  <div className="self-center justify-self-start">
                    <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
                      Aditya Raj Singh
                    </h1>

                    <p className="mt-2 text-black capitalize text-[20px] group-hover:text-gray-300">
                      Position
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
                        href="https://www.linkedin.com/in/aditya-raj-singh-gour-8438a6179/"
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
      </div>
      <Footer />
    </div>
  );
};

export default Team;
