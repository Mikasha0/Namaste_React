import React, { useState } from "react";
import { useFetchFilterRestroList } from "../utils/useFetchFilterRestroList";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OfflinePage } from "./OfflinePage";
import { RestaurantCard, withHighRatings } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
  ] = useFetchFilterRestroList();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withHighRatings(RestaurantCard);

  if (onlineStatus === false) {
    return <OfflinePage />;
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
            (res) => res.info.avgRating > 4.5
          );
          return setFilteredRestaurant(letFilteredData);
        }}
      >
        Top Rated Restaurant
      </button>
      <button
        type="button"
        className="res-filter"
        onClick={() => {
          letFilteredData = restaurantList.filter(
            (res) => res.info.sla.deliveryTime < 30
          );
          return setFilteredRestaurant(letFilteredData);
        }}
      >
        Fast Delivery
      </button>
      <button
        type="button"
        className="res-filter"
        onClick={() => {
          letFilteredData = restaurantList.filter(
            (res) => res?.info?.veg === true
          );
          return setFilteredRestaurant(letFilteredData);
        }}
      >
        Veg Only
      </button>

      <div className="restaurant-container">
        {filteredRestaurant.length === 0 ? <p>No Results FOund!</p> : null}

        {filteredRestaurant.map((data) => {
          return data.info.avgRating > 4.5 ? (
            <RestaurantCardPromoted key={data.info.id} resData={data.info} />
          ) : (
            <RestaurantCard key={data.info.id} resData={data.info} />
          );
        })}
      </div>
    </React.Fragment>
  );
};
