import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

export const NavItems = () => {
  const cartItems = useSelector((store) => store.cart.item);
  return (
    <div className="nav-items flex items-center ml-auto">
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="text-black hover:text-gray-800 font-semibold text-sm flex font-extralight"
          >
            <IoHomeOutline className=" mr-1" size={18} />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-black hover:text-gray-800 font-semibold text-sm flex font-extralight"
          >
            <LuShoppingCart className=" mr-1" size={18} />
            {cartItems.length}
          </Link>
        </li>
        {/* <li>
          <Link
            to="/comment"
            className="text-black hover:text-gray-800 font-semibold text-sm flex font-extralight"
          >
            <LuShoppingCart className=" mr-1" size={18} />
            Comments
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
