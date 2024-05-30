import { addItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

export const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (list) => {
    dispatch(addItem(list));
  };
  return (
    <div>
      {item.map((list) => (
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
          </div>
          <div className="w-3/12  pl-12 pb-4">
            <div className="absolute">
              <button
                className="item-btn"
                onClick={() => {
                  handleAddItem(list);
                }}
              >
                ADD
              </button>
            </div>
            <img
              src={IMAGE_URL + list.card.info.imageId}
              className="food-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
