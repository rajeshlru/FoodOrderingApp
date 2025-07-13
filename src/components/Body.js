import RestarauntCards, { withLabelVeg } from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //console.log(<Body />); // This will log the React element, not the component itself(OBJECT)
  //console.log("Body component rendered"); // This will run every time the component renders
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { setUserName, loggedInUser } = useContext(UserContext);

  //console.log("Body Rendered", listOfRestaurants);
  useEffect(() => {
    //console.log("useEffect called"); // This will run only once when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.422689543931774&lng=78.44637676468814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //optional chaining
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //optional chaining
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1> Looks like you're offline!!Check your Interent </h1>;
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  const RestarauntCardsVeg = withLabelVeg(RestarauntCards);
  return (
    <div id="body" className="">
      <div
        id="button-container"
        className=" flex m-14 mt-10 ml-35 sm:flex sm:flex-col gap-0 sm:gap-4 lg:gap-0 lg:flex lg:flex-row"
      >
        <input
          type="text"
          data-testid="searchInput"
          id="searchItem"
          className="relative left-4 lg:relative lg:left-19 w-100  rounded-l-[15px] h-13 -ml-[40px] bg-gray-100 pl-3 border-0 hover:border-[1.6px] hover:border-red-500 focus:border-red-500 active:border-red-500  outline-none "
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          id="searchBox"
          className="relative top-1.8 h-13 left-4 px-4 sm:relative sm:-top-17 sm:left-[436px] sm:h-13 rounded-r-[15px] bg-red-100 border-0 hover:border-[1.6px] hover:border-red-500 focus:border-red-500 active:border-red-500  sm:w-24 lg:top-0 lg:left-[76px]"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(
                  typeof searchText === "string" ? searchText.toLowerCase() : ""
                )
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          🔍
        </button>
        <div id="button">
          <button
            id="filter-button"
            className=" relative top-16 -left-75 sm:relative sm:-top-17 sm:left-[76px] border-[1]  mx-4 w-50 h-13 lg:relative lg:top-0 lg:left-22 rounded-xl hover:bg-blue-200 border-blue-400"
            onClick={() => {
              const filteredData = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredData);
            }}
          >
            Top Rated Restaraunts 🔥
          </button>
        </div>
        <div id="delivery-button">
          <button
            id="delivery"
            className=" relative top-16 -left-65 sm:relative sm:-top-34 sm:left-[340px] border-[1] w-30 h-13 rounded-xl lg:relative lg:top-0 lg:left-22 hover:bg-blue-200 border-blue-400"
            onClick={() => {
              const filteredDelivery = listOfRestaurants.filter(
                (restaurant) => restaurant.info.sla.deliveryTime < 20
              );

              setFilteredRestaurant(filteredDelivery);
            }}
          >
            Fast Delivery
          </button>

          <div className="relative left-55 bottom-12">
            <label className="text-[22px] font-[400] text-blue-950 -ml-170 relative font-serif sm:relative sm:bottom-20 right-30 lg:relative lg:bottom-1 lg:ml-35">
              UserName:
            </label>
            <button>
              {" "}
              <input
                className="relative text-emerald-900 text-2xl left-11 w-50 rounded-[15px] h-13 -ml-[40px] bg-gray-100 text-center border-0 hover:border-[1.6px] hover:border-red-500 focus:border-red-500 active:border-red-500  outline-none sm:relative sm:bottom-19 sm:-ml-40 lg:relative lg:bottom-1 lg:-ml-30"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </button>
          </div>
        </div>
      </div>
      <div className=" p-4 text-3xl font-bold text-center mt-16  bg-gradient-to-r from-red-300 via-red-600 to-red-300 flex flex-row justify-center sm:relative sm:bottom-26 lg:mt-20  lg:relative lg:bottom-26 ">
        <div className="relative -bottom-1">Welcome</div>
        <div className="mx-4 text-white font-bold text-5xl relative bottom-1">
          {" "}
          {loggedInUser}!!
        </div>
      </div>
      <div
        id="restaraunt-container"
        className="relative top-18 flex flex-wrap sm:flex sm:flex-wrap sm:relative sm:-top-20 lg:flex lg:flex-wrap gap-x-10 gap-y-16 sm:gap-x-6 lg:gap-x-10  justify-baseline mt-10 ml-28 sm:mt-10 sm:ml-14 lg:mt-5 lg:ml-44 lg:relative lg:-top-20"
      >
        {filteredRestaurant?.length === 0 ? (
          <div className="text-4xl font-semibold text-red-500 text-center w-[88%] py-23">
            ❌Still! Not available food for Fast Delivery{" "}
            <h1 className="py-6 text-green-500">Things are getting ready!!</h1>
            <h1 className="py-2">🫷Wait for few minutes🫸 </h1>
          </div>
        ) : (
          filteredRestaurant?.map((restaurant) => (
            <Link
              id="underline"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestarauntCardsVeg resData={restaurant} />
              ) : (
                <RestarauntCards resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
