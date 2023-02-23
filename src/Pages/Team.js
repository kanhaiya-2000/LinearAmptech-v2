import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Team = () => {
  return (
    <div>
      <Header />
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
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={require("../assets/minakshi.jpg")}
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

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={require("../assets/karun.png")}
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

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={require("../assets/vivek.jpeg")}
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
        <hr />
        <div>
          <div>
            <div>
              <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                  <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Other Team
                  </h1>

                  <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo incidunt ex placeat modi magni quia error alias,
                    adipisci rem similique, at omnis eligendi optio eos harum.
                  </p>

                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                      <img
                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        src={require("../assets/minakshi.jpg")}
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

                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                      <img
                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        src={require("../assets/karun.png")}
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

                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                      <img
                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        src={require("../assets/vivek.jpeg")}
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
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform shadow-none cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                      <img
                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        src={require("../assets/vivek.jpeg")}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
