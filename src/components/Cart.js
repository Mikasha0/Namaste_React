import { useDispatch, useSelector } from "react-redux";
import { clearItem, decreaseItem } from "../utils/cartSlice";
import { increaseItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constant";
import headerImage from "../Images/header_img.png";
export const Cart = () => {
  const cartData = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

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
  const grandTotal = cartData
    .map(
      (item) =>
        (item.card.info.price !== undefined
          ? item.card.info.price / 100
          : item.card.info.defaultPrice / 100) * item.quantity
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      <div className="mt-[80px] pr-8 pl-8 rounded-lg relative">
        <img
          className="w-full h-[200px] object-cover rounded-lg"
          src={headerImage}
          alt="header-img"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg mr-8 ml-8"></div>

        <p className="absolute top-[60px] md:top-[190px] lg:top-[60px]  text-white lg:text-3xl  md:text-3xl text-sm font-extralight w-2/4 left-20">
          Find all your added items here
        </p>
        <p className="absolute top-[100px] md:top-[250px] lg:top-[120px] text-white text-base font-extralight w-2/4 left-20">
          {grandTotal === 0 ? (
            <p>Your cart is currently empty</p>
          ) : (
            <p className="mt-1 mb-1 font-semibold ">Total : ₹{grandTotal}</p>
          )}
        </p>
        <button
          className="absolute top-[100px] md:top-[250px] lg:top-[150px] text-black  text-base font-semibold  left-[1110px] border border-white px-4 py-1 rounded-lg bg-gray-300 opacity-50 hover:bg-gray-400"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="text-center m-8">
        <div
          className={`w-full m-auto py-4 px-4 ${containerClassName} rounded-lg`}
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
                    {list.card.info.defaultPrice ? (
                      <span> - ₹{list.card.info.defaultPrice / 100}</span>
                    ) : (
                      <span> - ₹{list.card.info.price / 100}</span>
                    )}
                  </div>
                  <span className="text-xs">{list.card.info.description}</span>
                  <div className="flex mt-3">
                    <button
                      className="w-1/12 px-1 py-1 border border-black rounded-lg"
                      onClick={() => {
                        adjustCartItem(list, "increase");
                      }}
                    >
                      +
                    </button>
                    <p className="p-3">{list.quantity}</p>
                    <button
                      className="w-1/12 px-1 py-1 border border-black rounded-lg "
                      onClick={() => {
                        adjustCartItem(list, "decrease");
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="w-3/12  pl-12 pb-4 flex ">
                  <img
                    src={IMAGE_URL + list.card.info.imageId}
                    className="food-img rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
