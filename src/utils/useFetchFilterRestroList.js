import { useState, useEffect } from "react";
import { API_URL } from "./constant";
export const useFetchFilterRestroList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [menuItem, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMenuItems(
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
    console.log(menuItem)
  };
  return [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
    menuItem,
    setMenuItems
  ];
};
