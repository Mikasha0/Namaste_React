import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ category, showItem, setShowIndex }) => {

    const handleClick = () =>{
        setShowIndex();
    }

  return (
    <div className="w-12/12 bg-gray-200 mx-auto p-3 shadow-lg  my-4 rounded-lg">
      <div
        className="flex justify-between cursor-pointer" onClick={handleClick}
      >
        <span>
          {category.title} ({category.itemCards.length})
        </span>
        <span className="px-2">▼</span>
      </div>
      <div className="text-center">
         {showItem===true?(<ItemList item={category.itemCards} />):null}
      </div>
    </div>
  );
};
