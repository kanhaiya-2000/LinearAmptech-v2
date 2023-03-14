const ProductRight = ({ productImg, productName, productDetails }) => {
  return (
    <div className="  lg:flex lg:flex-row flex flex-col-reverse  gap-16 py-40 px-[10%] justify-center text-white bg-primary-color">
      <div className="lg:w-[800px] max-w-[600px] flex flex-col   justify-between">
        <div>
          <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
            {productName}
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            {productDetails}
          </p>
        </div>
      </div>
      <div className="lg:w-[400px] lg:h-[400px] md:w-[600px] md:h-[600px] h-[350px] w-[350px] bg-[#F2F2F2] rounded-2xl shadow-md flex items-center justify-center">
        <img src={productImg} className="w-[90%] "></img>
      </div>
    </div>
  );
};

export default ProductRight;
