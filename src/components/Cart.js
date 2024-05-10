import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearItem, decreaseItem} from "../utils/cartSlice";
import { increaseItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constant";
export const Cart = () => {
  const cartData = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItem());
  };

  const increaseCartItem = (list) =>{
    dispatch(increaseItem(list))
  }
  const decreaseCartItem = (list) =>{
    dispatch(decreaseItem(list))
  }


  const containerClassName = cartData.length === 0 ? "bg-white" : "bg-gray-200";

  return (
    <div className="text-center m-16 p-4">
      <h1 className="text-xl font-bold mb-5">Cart</h1>
      <button
        className="px-3 py-2 border border-gray-200 mb-3 rounded-lg"
        onClick={clearCart}
      >
        Clear Cart
      </button>

      <div className={`w-10/12 m-auto p-4 ${containerClassName}`}>
        <div>
          {cartData.map((list) => (
            <div
              key={list.card.info.id}
              className="p-2 m-2  border-gray-400 border-b-2 flex justify-between text-left"
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
                      increaseCartItem(list)
                    }}
                  >
                    +
                  </button>
                 <p className="p-3">{list.quantity}</p> 
                  <button
                    className="w-1/12 px-1 py-1 border border-black rounded-lg "
                    onClick={() => {
                      decreaseCartItem(list);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="w-3/12  pl-12 pb-4 flex">
                <img
                  src={IMAGE_URL + list.card.info.imageId}
                  className="food-img"
                />
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};
