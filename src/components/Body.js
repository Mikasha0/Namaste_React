import React, { useState } from "react";
import { useFetchFilterRestroList } from "../utils/useFetchFilterRestroList";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OfflinePage } from "./OfflinePage";
import { RestaurantCard, withHighRatings } from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import { Shimmer } from "./Shimmer";
import MenuList from "./MenuList";
import headerImage from "../Images/header_img.png";
export const Body = () => {
  const [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
    menuItem,
    setMenuItems,
  ] = useFetchFilterRestroList();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withHighRatings(RestaurantCard);

  if (onlineStatus === false) {
    return <OfflinePage />;
  }

  if (restaurantList.length == 0 && menuItem.length == 0) {
    return <Shimmer />;
  }

  return (
    <React.Fragment>
      <div className="mt-[80px] pr-8 pl-8 rounded-lg relative">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src={headerImage}
          alt="header-img"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg mr-8 ml-8"></div>

        <p className="absolute top-[60px] md:top-[190px] lg:top-[190px]  text-white text-3xl font-extralight w-2/4 left-20">
          Order Your Favourite Food Here
        </p>
        <p className="absolute top-[190px] md:top-[250px] lg:top-[250px] text-white text-base font-extralight w-2/4 left-20">
          Enjoy a wide variety of delicious meals delivered straight to your
          door. From local favorites to international cuisine, we've got
          something to satisfy every craving.
        </p>
      </div>

      <div className="mt-5  relative z-index-20 pl-8 pr-8">
        <MenuList title={"What's on your mind ?"} menus={menuItem} />
      </div>
      <h1 className="text-xl py-3 text-black font-bold pl-8 mb-3">
        Restaurants with online food delivery
      </h1>

      <div className="w-full pl-8 pr-8 ">
        <input
          type="text"
          placeholder="Search for restaurant or dish "
          className=" w-5/12 border border-gray-300 rounded-lg p-2 px-7 font-extralight mr-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-black p-2 py-[9px] text-white rounded-lg px-2 font-extralight text-sm"
          onClick={() => {
            let filterByName = restaurantList.filter((filterName) => {
              return filterName.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });

            return setFilteredRestaurant(filterByName);
          }}
        >
          <div className="flex">
            <CiSearch className="pt-1 mr-1" size={18} />
            Search
          </div>
        </button>
        <button
          type="button"
          className="res-filter font-extralight"
          onClick={() => {
            let letFilteredData = restaurantList.filter(
              (res) => res.info.avgRating > 4.4
            );
            return setFilteredRestaurant(letFilteredData);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          type="button"
          className="res-filter font-extralight"
          onClick={() => {
            let letFilteredData = restaurantList.filter(
              (res) => res.info.sla.deliveryTime < 35
            );
            return setFilteredRestaurant(letFilteredData);
          }}
        >
          Fast Delivery
        </button>
        <button
          type="button"
          className="res-filter font-extralight"
          onClick={() => {
            let letFilteredData = restaurantList.filter(
              (res) => res?.info?.veg === true
            );
            return setFilteredRestaurant(letFilteredData);
          }}
        >
          Veg Only
        </button>
      </div>

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
