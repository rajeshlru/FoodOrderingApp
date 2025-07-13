const ShimmerCards = () => {
  return (
    <div className="shimmerCard w-64 h-80 mt-[8pc] ml-[4pc] ">
      <div className="shimmerImage  w-[235px] h-40 mt-[1pc] ml-[0.1pc]  bg-gradient-to-r from-[#e0e0e0] via-[#f6f7f8] to-[#e0e0e0] animate-shimmer rounded-2xl"></div>
      <div className="shimmeritems">
        <h4
          id="shim1"
          className=" w-40 h-5 my-3  bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5] animate-shimmer rounded-xl  ml-3 "
        ></h4>
        <h5
          id="shim2"
          className=" w-40 h-5 my-3  bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5] animate-shimmer rounded-xl   ml-3 "
        ></h5>
        <h6
          id="shim3"
          className=" w-40 h-5 my-3 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]animate-shimmer rounded-xl  ml-3 "
        ></h6>
        <h6
          id="shimone4"
          className=" w-40 h-5 my-3  bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5] animate-shimmer rounded-xl ml-3 "
        ></h6>
        <h6
          id="shim5"
          className=" w-40 h-5 my-3 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff80] to-[#f5f5f5]animate-shimmer rounded-xl   ml-3  "
        ></h6>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div
      id="shimmerContainer"
      className="relative left-29 top-7 flex flex-wrap sm:flex sm:flex-wrap sm:relative sm:-top-40 lg:flex lg:flex-wrap gap-x-10 gap-y-16 sm:gap-x-6 lg:gap-0  justify-baseline mt-10 -ml-12 sm:mt-10 sm:ml-14 lg:-mt-1 lg:ml-26 lg:relative lg:top-2 lg:left-0"
    >
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
      <ShimmerCards />
    </div>
  );
};

export default Shimmer;
