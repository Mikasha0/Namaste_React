import React, { useEffect, useState } from "react";
import { MenuCard } from "../components/MenuCard";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useFetchRestaurantMenu } from "../utils/useFetchRestaurantMenu";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const  resInfo  = useFetchRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

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

  return (
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
                return (
                  <MenuCard
                    key={menu_items.card.info.id}
                    menuInfo={menu_items.card.info}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
