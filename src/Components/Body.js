import resList from "../../utils/mockData";
import { useState } from "react";
import ResturentCard from "./RestaurantCard";

const Body = () => {
  let [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search">sarch</div>
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
