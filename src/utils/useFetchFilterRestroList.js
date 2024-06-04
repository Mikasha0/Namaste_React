import { useState, useEffect } from "react";
import { API_URL } from "./constant";
export const useFetchFilterRestroList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [menuItem, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
    const scrollEvent = window.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollEvent;
    };
  }, []);

  const handleScrollEvent = () => {
    if (
      window.innerHeight + window.scrollY + 400 >=
      document.body.scrollHeight
    ) {
      console.log(true)
    }
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();
    console.log(json);

    setRestaurantList((list) => [
      ...list,
      ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setFilteredRestaurant((restro) => [
      ...restro,
      ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setMenuItems(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  return [
    restaurantList,
    setRestaurantList,
    filteredRestaurant,
    setFilteredRestaurant,
    menuItem,
    setMenuItems,
  ];
};
