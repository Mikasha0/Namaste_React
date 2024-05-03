import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useFetchFilterRestroList } from "../utils/useFetchFilterRestroList";
import { useOnlineStatus } from "../utils/useOnlineStatus";
export const Body = () => {
  const [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
  ] = useFetchFilterRestroList();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  if (onlineStatus === false) {
    console.log(onlineStatus);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {!onlineStatus && (
          <div className="max-w-md bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">
              It seems like you are not online
            </h2>
            <p className="text-gray-600">
              Please check your internet connection and try again.
            </p>
          </div>
        )}
      </div>
    );
  }

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
          return <RestaurantCard key={data.info.id} resData={data.info} />;
        })}
      </div>
    </React.Fragment>
  );
};
