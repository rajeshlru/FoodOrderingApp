import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestarauntCards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    locality,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      id="res-card"
      className="hover:cursor-grab transform transition-transform duration-[220ms] hover:scale-94"
    >
      <div id="image-wrapper" className="w-[120%]">
        <img
          id="res-img"
          className=" w-64 h-46 rounded-3xl"
          src={CDN_URL + cloudinaryImageId}
          alt="res-card"
        />
      </div>
      <div id="resBox ">
        <div
          id="res-items"
          className="w-50 h-50 flex flex-col justify-between ml-4 "
        >
          <h4 id="res1" className="w-64 mt-3 text-[18px] truncate font-bold">
            {name}
          </h4>
          <h5 id="res2" className="w-44 text-cyan-700">
            {locality}
          </h5>
          <h6 id="res3" className="w-44 truncate text-gray-600 ">
            {cuisines.join(",")}
          </h6>
          <h6 id="res3one" className="w-64 text-[16px] font-stretch-normal ">
            {costForTwo}
          </h6>
          <div className="flex">
            <h6 id="res4" className="w-44 text-green-700">
              ⭐{avgRating}
            </h6>
            <h6 id="res4" className="w-44 -ml-26 text-rose-400">
              •{sla?.deliveryTime}
              {""} mins
            </h6>

            {/* <h5>{loggedInUser}</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const withLabelVeg = (RestarauntCards) => {
  return (props) => {
    return (
      <div>
        <RestarauntCards {...props} />{" "}
        <label className="bg-green-700 text-white font-bold text-[18px] rounded-[8px] py-0.5 relative bottom-96 px-[14px] ">
          Veg
        </label>
      </div>
    );
  };
};

export default RestarauntCards;
