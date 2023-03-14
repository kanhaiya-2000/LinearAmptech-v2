import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { homeProduct } from "../data/HomeData";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      speed={800}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[100%]"
    >
      {homeProduct.map(({ img, title, tag, content, link }) => {
        return (
          <SwiperSlide>
            <div className="slide flex flex-col lg:flex-row gap-20 justify-center items-center w-[82%] h-[100%] py-20 mx-auto">
              <div className="lg:h-[400px] h-[100px] max-w-[450px] flex justify-center  items-center ">
                <img src={img} className="min-w-[400px] "></img>
              </div>
              <div className="lg:right lg:max-w-[650px] flex flex-col gap-4">
                <p className="tag text-[#0346B5] text-[1.1rem] font-medium ">
                  {tag}
                </p>
                <h2 className="lg:text-[2.5rem] text-2xl lg:leading-normal font-bold">
                  {title}
                </h2>
                <p className=" text-[0.9rem] leading-loose min-h-[200px] text-justify">
                  {content}
                </p>
                <div>
                  <a
                    className="text-blue-900 underline font-medium cursor-pointer"
                    href={link}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
