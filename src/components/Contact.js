const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="border-0 w-[45%] h-[450px] flex flex-col items-center my-28 bg-green-100 rounded-4xl">
        <h1 className="mx-3 mt-15 text-5xl text-red-500"> 24/7Available</h1>
        <div className="flex flex-col justify-center ">
          <button className=" mt-16 -ml-23  rounded-2xl">
            <input
              placeholder="Name"
              className=" border-0 text-center w-[550%] -ml-40 bg-stone-100 h-12 rounded-[16px] text-black text-xl"
            ></input>
          </button>
          <button className="  my-6 -ml-23">
            <input
              placeholder="Message"
              className=" text-center w-[550%] -ml-40 bg-stone-100 h-12 rounded-[16px] text-black text-xl"
            ></input>
          </button>
          <button className="  mt-10 -ml-23">
            <input
              type="submit"
              className=" text-center w-[550%] -ml-40 bg-stone-100 h-12 rounded-[16px] hover:bg-red-400 text-black text-xl"
            ></input>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
