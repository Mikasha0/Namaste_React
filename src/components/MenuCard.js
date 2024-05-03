import React from "react";
import { IMAGE_URL } from "../utils/constant";

export const MenuCard = ({ menuInfo }) => {
  const { name, defaultPrice, finalPrice, imageId, description, price } = menuInfo;
  
  const { rating } = menuInfo.ratings.aggregatedRating;
  console.log(menuInfo);

  return (
    <div className="menu-card p-2">
      <div className="flex items-center justify-between border-b border-gray-400 py-2">
        <div>
          <h2 className="text-lg font-semibold mr-4 mb-8">{name}</h2>
          <p className="text-gray-600 mr-4  ">{description}</p>
          {/* {defaultPrice ? (
            <p className="text-gray-600 mr-4 mt-4 ">Price: ${defaultPrice}</p>
          ) : (
            <p className="text-gray-600 mr-4 mt-4 ">Price: ${finalPrice}</p>
          )} */}
          <p className="text-gray-600 mr-4 mt-4 ">Price: Rs{price/100}</p>

          {rating ? (
            <p className="text-gray-600 mr-4 mt-3">Rating: {rating}</p>
          ) : null}
        </div>
        <div className="flex items-center">
          <div className="img-width">
            {imageId?( <img
              className="menu-img object-cover mr-4"
              src={IMAGE_URL + imageId}
              alt="Restaurant Image"
            />):null}
           
            <button className="items-btn bg-white hover:bg-gray-300 text-black shadow-lg font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
