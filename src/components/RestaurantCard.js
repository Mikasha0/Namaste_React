import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId,id } = resData;

  return (
    <div className="restaurant-card max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`restaurants/` + id }>
        <img
          className="cloudinary"
          src={IMAGE_URL + cloudinaryImageId}
          alt="Restaurant Image"
        />
        <div className="px-6 py-4">
          <div className="font-semibold text-sm text-gray-900 mb-2">{name}</div>
          <p className="text-gray-800 text-sm mb-2">fooditems</p>
          <p className="text-gray-800 text-sm mb-2">
            Address: 123 Main Street, City, Country
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
