import React, { useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { API_URL } from "../utils/constant";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length == 0) {
    return <Shimmer />;
  }

  return (
    <React.Fragment>
      <div className="serch flex justify-center items-center h-7">
        <div className=" flex w-full max-w-2xl mb-8">
          <input
            className="search-input flex-1  rounded-l-lg rounded-r-lg border border-gray-300 focus:outline-none"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Here..."
          />
          <button
            className="search-button relative bg-black text-white font-semibold hover:bg-gray-800 h-11 px-6 rounded-l-lg rounded-r-lg"
            type="button"
            onClick={() => {
              let filterByName = restaurantList.filter((filterName) => {
                return filterName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              return setFilteredRestaurant(filterByName);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <button
        type="button"
        className="res-filter"
        onClick={() => {
          letFilteredData = restaurantList.filter(
            (res) => res.info.avgRating > 4.3
          );
          return setFilteredRestaurant(letFilteredData);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="restaurant-container">
        {filteredRestaurant.map((data) => {
          return (
              <RestaurantCard key={data.info.id} resData={data.info} />
          );
        })}
      </div>
    </React.Fragment>
  );
};
