import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRestaurantMenu } from "../utils/useFetchRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

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

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <React.Fragment>
      <div className="res-menu">
        <h1 className="text-2xl font-bold mb-8 text-yellow-400">{name}</h1>
        <div className="bg-white ">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-gray-400">{areaName}</p>
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
          <div className="menu-item">
            {categories.map((category, index) => (
              <RestaurantCategory
                key={category.card.card.title}
                category={category?.card?.card}
                showItem={index === showIndex ? true : false}
                setShowIndex={() => {
                  if (index === showIndex) {
                    setShowIndex(null);
                  } else {
                    setShowIndex(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
