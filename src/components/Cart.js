import { useDispatch, useSelector } from "react-redux";
import { clearItem, decreaseItem } from "../utils/cartSlice";
import { increaseItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constant";
import headerImage from "../Images/header_img.png";
import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

export const Cart = () => {
  const cartData = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  console.log(cartData);

  const clearCart = () => {
    dispatch(clearItem());
  };

  const adjustCartItem = (list, actionType) => {
    if (actionType === "increase") {
      dispatch(increaseItem(list));
    } else if (actionType === "decrease") {
      dispatch(decreaseItem(list));
    }
  };

  const containerClassName = cartData.length === 0 ? "bg-white" : "bg-white";
  const Total = cartData
    .map(
      (item) =>
        (item.card.info.price !== undefined
          ? item.card.info.price / 100
          : item.card.info.defaultPrice / 100) * item.quantity
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const platformFee = 5;
  const VAT = (10 / 100) * Total;
  const roundedVAT = parseFloat(VAT.toFixed(2));
  const grandTotal = Math.round(Total + roundedVAT + platformFee);

  return (
    <div className="bg-gray-200">
      {Total !==0 ? (
        <div className="p-8 flex mt-16">
          <div
            className={`w-8/12 mb-auto py-4 px-4 mr-8 ${containerClassName} `}
          >
            <div>
              {cartData.map((list) => (
                <div
                  key={list.card.info.id}
                  className="p-2 m-2 pb-5 border-gray-400 border-b-[1px] flex justify-between text-left"
                >
                  <div className="w-9/12">
                    <div className="py-2">
                      <span>{list.card.info.name}</span>
                      {list.card.info.dfaultPrice ? (
                        <span> - ₹{list.card.info.defaultPrice / 100}</span>
                      ) : (
                        <span> - ₹{list.card.info.price / 100}</span>
                      )}
                    </div>
                    <span className="text-xs">
                      {list.card.info.description}
                    </span>
                    <div className="flex mt-3">
                      <button
                        className="w-1/12  border border-black rounded-lg"
                        onClick={() => {
                          adjustCartItem(list, "decrease");
                        }}
                      >
                        -
                      </button>
                      <p className="p-3">{list.quantity}</p>
                      <button
                        className="w-1/12 px-1 py-1 border border-black rounded-lg "
                        onClick={() => {
                          adjustCartItem(list, "increase");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-3/12  pl-12 pb-4 flex ">
                    <img
                      src={IMAGE_URL + list.card.info.imageId}
                      className="food-img "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-4/12">
            <div className="w-full bg-white px-8 py-6 ">
              <div className="flex">
                <MdAttachMoney
                  className="w-14 bg-[#fc8019] p-2 text-white"
                  size={49}
                />
                <div>
                  <p className="ml-4 text-base font-semibold tracking-[5px]">
                    Total
                  </p>
                  <hr className=" ml-4 w-1/2 mt-2 border-t-2 border-black" />
                </div>
              </div>
            </div>
            <div className="w-full bg-white px-8 py-6 mt-[2px]">
              <h2 className="text-sm font-semibold">Bill Details</h2>
              <div className="flex justify-between">
                <p className="text-sm mt-3 text-gray-500">Item price</p>
                <p className="text-sm mt-3 text-gray-500"> ₹ {Total}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm mt-2 text-gray-500 flex">
                  Platform fee <CiCircleInfo className="mt-1 ml-1" size={15} />
                </p>
                <p className="text-sm mt-2 text-gray-500"> ₹ {platformFee}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm mt-3 text-gray-500">10% VAT</p>
                <p className="text-sm mt-3 text-gray-500"> ₹ {roundedVAT}</p>
              </div>
              <hr className=" w-full mt-5 border-t-2 border-black" />
              <div className="flex justify-between">
                <p className="text-sm mt-5  font-semibold">TO PAY</p>
                <p className="text-sm mt-5 font-semibold"> ₹ {grandTotal}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex  pt-[100px] justify-center">
            <img
              className="w-[300px] flex justify-center"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="empty-cart"
            />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-lg py-3">Your cart is empty</h1>
            <p className="font-extralight text-sm">
              You can go to home page to view more restaurants
            </p>
            <Link to="/">
              <button className="px-[80px] py-2 bg-[#fc8019] mt-4 mb-8 font-semibold text-base text-white">
                GO TO HOMEPAGE
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
