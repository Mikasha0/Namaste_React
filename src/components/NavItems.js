import { Link } from "react-router-dom";
export const NavItems = () => {
  return (
    <div className="nav-items flex items-center ml-auto">
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-800 font-semibold text-sm"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-white hover:text-gray-800 font-semibold text-sm"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            to="/aboutUs"
            className="text-white hover:text-gray-800 font-semibold text-sm"
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-gray-800 font-semibold text-sm"
          >
            Restaurants
          </a>
        </li>
      </ul>
    </div>
  );
};
