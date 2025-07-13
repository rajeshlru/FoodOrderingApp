import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //console.log("Add Item clicked");
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          className="flex justify-between items-start  py-6 px-3 border-b border-gray-300 "
          key={item?.card?.info?.id}
        >
          <div className="text-left w-full h-full ">
            <h1 className="text-xl w-[80%] text-cyan-950 text-shadow-cyan-700 text-[20px] font-semibold">
              {item?.card?.info?.name}
            </h1>
            <h2 className="text-[18px] font-medium text-red-700 ">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h2>
            <div id="rating" className="text-green-600 text-[14px]">
              ⭐{" "}
              {item?.card?.info?.ratings?.aggregatedRating?.rating
                ? item?.card?.info?.ratings?.aggregatedRating?.rating
                : 4.3}
            </div>
            <h3 className=" text-gray-600 w-[35pc] text-[16px] ">
              {item?.card?.info?.description}
            </h3>
          </div>
          <div className="w-38 h-34 ">
            <img
              className=" w-full h-full object-cover rounded-[12px]"
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <div>
              {" "}
              <button
                className="p-2 bg-green-600 font-bold text-[15px] rounded-[10px] px-5 text-white shadow-lg relative bottom-5 hover:bg-green-900 transition duration-300 "
                onClick={() => handleAddItem(item)}
              >
                Add {"+"}
              </button>
            </div>
          </div>
          <div className="border-b border-gray-300"></div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
