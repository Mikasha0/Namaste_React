import React, { useContext } from "react";
import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId, id } = resData;
  const deliveryTime = resData.sla.slaString;

  return (
    <div className="restaurant-card max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`restaurants/` + id}>
        <img
          className="cloudinary"
          src={IMAGE_URL + cloudinaryImageId}
          alt="Restaurant Image"
        />
        <div className="px-6 py-4">
          <div className="font-semibold text-sm text-gray-900 mb-2">{name}</div>
          <p className="text-gray-800 text-sm mb-2">fooditems</p>
          <p className="text-gray-800 text-sm mb-2">
            Delivery Time : {deliveryTime}
          </p>
          <p className="text-gray-800 text-sm">
            Rating: <span className="text-yellow-500 text-sm">{avgRating}</span>
            /5
          </p>
        </div>
      </Link>
    </div>
  );
};

export const withHighRatings = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div style={{ position: "relative" }}>
          <p
            style={{
              width: '100px',
              position: "absolute",
              top: 0,
              left: 10,
              padding: "2px 10px 5px 10px",
              fontWeight:100,
              color:'orange',
              backgroundColor:'#D3D3D3'
            }}
          >
            High Rated
          </p>
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};
