import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import ResturentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // API call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" />
        <button className="search-btn">Search</button>
      </div>
      <button
        className="btn"
        onClick={() => {
          // filter restaurent
          const filteredList = ListOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurent
      </button>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
