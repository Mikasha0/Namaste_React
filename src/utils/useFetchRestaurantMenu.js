import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
export const useFetchRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const menu_details = await data.json();
    setResInfo((menu) => [...menu, menu_details.data]);
  };
  return resInfo;
};
