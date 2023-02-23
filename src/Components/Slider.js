import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      <SwiperSlide>
        <div className="slide flex gap-16 justify-center w-[100%] h-[100%] py-20">
          <div className="h-[400px] w-[450px] bg-gray-300"></div>
          <div className="right w-[650px] flex flex-col gap-4">
            <p className="tag text-[#0346B5] text-[1.1rem] font-medium">RFs</p>
            <h2 className="text-[2.5rem] font-bold">
              Radio Frequency model name
            </h2>
            <p className=" text-[1.1rem] leading-loose h-[200px]">
              Vivamus ac molestie tellus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Proin neque purus, dapibus sit amet
              augue ac, posuere viverra erat. Proin vestibulum facilisis libero
              in porttitor. Maecenas et fermentum felis.
            </p>
            <a className="text-blue-900 underline font-medium cursor-pointer">
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide flex gap-16 justify-center w-[100%] h-[100%] py-20">
          <div className="h-[400px] w-[450px] bg-gray-300"></div>
          <div className="right w-[650px] flex flex-col gap-4">
            <p className="tag text-[#0346B5] text-[1.1rem] font-medium">RFs</p>
            <h2 className="text-[2.5rem] font-bold">
              Radio Frequency model name
            </h2>
            <p className=" text-[1.1rem] leading-loose h-[200px]">
              Vivamus ac molestie tellus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Proin neque purus, dapibus sit amet
              augue ac, posuere viverra erat. Proin vestibulum facilisis libero
              in porttitor. Maecenas et fermentum felis.
            </p>
            <a className="text-blue-900 underline font-medium cursor-pointer">
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
