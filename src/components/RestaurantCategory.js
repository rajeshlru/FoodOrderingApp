import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="border-b border-gray-300 ">
      <div
        className=" flex justify-between font-bold text-[17px] items-center my-10 "
        onClick={handleClick}
      >
        <div className="">
          <span className="mx-4"> {data?.title}</span>
          <span className=""> ({data?.itemCards?.length}) </span>
        </div>
        <span className="mx-10">{"⋁"}</span>
      </div>
      <span className="text-center text-[10px] my-10 h-16">
        {showItems && <ItemList items={data.itemCards} />}
      </span>
    </div>
  );
};
export default RestaurantCategory;
