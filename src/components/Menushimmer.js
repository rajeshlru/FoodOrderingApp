const ShimmerCards = () => {
  return (
    <div className="shimmerCard w-64 h-80 mt-[8pc] ml-[2pc] mb-220">
      <div className="shimmerImage w-[470px] lg:w-[755px] ml-8 h-40 lg:-mt-[2pc] lg:-ml-[6pc]  bg-gradient-to-r from-[#e0e0e0] via-[#f6f7f8] to-[#e0e0e0] animate-shimmer rounded-2xl"></div>
      <div className="shimmeritems">
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%]  lg:mt-[10%] lg:w-[50pc]"
        ></h1>
        <h4
          id="shim1"
          className=" w-120 h-25 my-6  mt-5  bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5] animate-shimmer rounded-xl  ml-3 "
        ></h4>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h5
          id="shim2"
          className=" w-120 h-25 my-6    bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]   animate-shimmer rounded-xl   ml-3 "
        ></h5>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h6
          id="shim3"
          className=" w-120 h-25 my-6 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]  rounded-xl   ml-3 "
        ></h6>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h6
          id="shimone4"
          className=" w-120 h-25 my-6   bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]  rounded-xl ml-3 "
        ></h6>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h6
          id="shim5"
          className=" w-120 h-25 my-6   bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]  rounded-xl   ml-3  "
        ></h6>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h6
          id="shim5"
          className=" w-120 h-25 my-6   bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]  rounded-xl   ml-3  "
        ></h6>
        <h1
          id="breaker"
          className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:-ml-[40%] lg:w-[50pc]"
        ></h1>
        <h6
          id="shim5"
          className=" w-120 h-25 my-6   bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]  rounded-xl   ml-3  "
        ></h6>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div
      id="shimmerContainer"
      className="relative  top-7 flex flex-wrap sm:flex sm:flex-wrap sm:relative sm:-top-40 lg:flex lg:flex-wrap gap-x-10 gap-y-16 sm:gap-x-6 lg:gap-0  justify-baseline mt-10 -ml-12 sm:mt-10 sm:ml-14 lg:-mt-1 lg:ml-115 lg:relative lg:top-2"
    >
      <ShimmerCards />
    </div>
  );
};

export default Shimmer;
