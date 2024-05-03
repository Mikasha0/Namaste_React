import React, { useEffect, useState } from "react";
import { MenuCard } from "../components/MenuCard";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
      const menuDetails = await response.json();
      setResInfo(menuDetails.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  const {
    name = "",
    avgRating = "",
    cuisines = "",
    areaName = "",
    costForTwoMessage = "",
    totalRatingsString = "",
  } = resInfo?.cards[2]?.card?.card?.info ?? {};


  const { title = "" } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};

      
  return resInfo === null ? (
    <Shimmer/>
  ) : (
    <React.Fragment>
      <div className="res-menu">
        <h1 className="text-2xl font-bold mb-8 text-yellow-400">{name}</h1>
        <div className="bg-white ">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-gray-400">
              {areaName}
              {console.log(
                resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
                  .card.itemCards
              )}
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 mr-2">Rating : {avgRating}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {cuisines} -{" "}
              <span className="font-semibold">{costForTwoMessage}</span>{" "}
            </p>
            <span className=" h text-black font-bold py-2 px-4">
              {totalRatingsString}
            </span>
          </div>
        </div>
        <div className="menu-items">
          <h1 className="text-black text-lg font-bold underline">{title}</h1>
          <div className="menu-item">
            {resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
              (menu_items) => {
                return <MenuCard  key={menu_items.card.info.id} menuInfo={menu_items.card.info} />;
              }
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
