import { useState, useEffect } from "react";
import { API_URL } from "./constant";
export const useFetchFilterRestroList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
  return [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
  ];
};
