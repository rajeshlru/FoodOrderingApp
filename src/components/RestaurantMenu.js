import Menushimmer from "./Menushimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo == null) return <Menushimmer />;
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwo,
    cuisines,
    areaName,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]?.card?.card;
  //console.log(resInfo);
  console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="w-auto  lg:w-[1000px]">
      <div>
        <h1>
          <br></br>
        </h1>
        <h1
          id="center"
          className="font-bold relative top-8 left-10 sm:left-18 lg:left-100 text-3xl"
        >
          {name}
        </h1>
      </div>
      <div className="border-0 w-[80%] items-center justify-between rounded-b-4xl rounded-t-none mt-12 gap-6 pb-5 mx-[10%] sm:mx-[10%] lg:ml-[37%]  bg-gradient-to-b from-[#ffffff] via-[#dfdfe7  ] to-[#ebebf2]   ">
        <div className="flex items-center justify-between rounded-l-3xl rounded-r-3xl mx-[20px] bg-[#FFFFFF]">
          <div className="mx-5">
            <div className="flex flex-wrap font-medium ">
              <div>⭐</div>
              <div className="font-bold text-green-700">{avgRating}</div>
              <div className="font-sans text-red-600">
                {" "}
                ({totalRatingsString})
              </div>{" "}
              <div className="text-[20px] pl-2 -mt-[3px] pr-1 text-[#02060c73]">
                {" "}
                {"•  "}
              </div>
              <div className="font-bold">Rs.{costForTwo / 100} for two</div>
            </div>

            <h3 className="text-[#FF5200] font-[13px] text-[17px] mb-1 underline underline-offset-2 decoration-1">
              {cuisines.join(",")}
            </h3>
            <h3 className="font-bold ">
              Outlet:{" "}
              <span className="text-[#02060c99] font-[14px]">{areaName}</span>
            </h3>
          </div>

          {/* Right Side - Image */}
          <div className="w-40 h-40 ">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={CDN_URL + cloudinaryImageId}
              alt="Restaurant"
            />
          </div>
        </div>
      </div>
      <h1
        id="breaker"
        className="border-t border-gray-300 my-6 ml-[10%] w-[25pc] sm:ml-[37%] sm:w-[50pc] lg:ml-[37%] lg:w-[50pc]"
      ></h1>
      <div
        id="relatedItems"
        className="border-0 ml-[3%] w-[50pc] sm:ml-[37%] sm:w-[50pc] lg:ml-[37%] lg:w-[50pc]"
      >
        <h2 className="text-center font-semibold text-2xl mb-3 sm:relative -ml-90 lg:ml-8">
          🌿MENU🌿
        </h2>

        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
