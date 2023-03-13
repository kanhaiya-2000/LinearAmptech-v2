const ProductLeft = ({ productImg, productName, productDetails }) => {
  return (
    <div className="lg:flex  justify-center gap-16 my-36 px-[10%]">
      <div className="lg:w-[400px] lg:h-[400px] sm:w-[600px] sm:h-[600px] h-[350px] w-[350px] bg-[#F2F2F2] rounded-2xl flex items-center   shadow-md">
        <img src={productImg} className="w-[100%] "></img>
      </div>
      <div className="lg:w-[800px] max-w-[600px] flex flex-col  justify-between">
        <div>
          <h2
            className="text-[2rem] font-bold mb-5 mt-12 lg:mt-0 "
            data-aos="fade-up"
          >
            {productName}
          </h2>
          <p data-aos="fade-left" data-aos-duration="1000">
            {productDetails}
          </p>
        </div>
        <a className="underline cursor-pointer hover:text-blue-800">more</a>
      </div>
    </div>
  );
};

export default ProductLeft;
