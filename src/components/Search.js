export const Search = () => {
  return (
    <div className=" flex w-full max-w-2xl mb-8">
    <input
      className="search-input flex-1  rounded-l-lg rounded-r-lg border border-gray-300 focus:outline-none"
      type="text"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      placeholder="Search Here..."
    />
    <button
      className="search-button relative bg-black text-white font-semibold hover:bg-gray-800 h-11 px-6 rounded-l-lg rounded-r-lg"
      type="button"
      onClick={() => {
        let filterByName = restaurantList.filter((filterName) => {
          return filterName.info.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        return setFilteredRestaurant(filterByName);
      }}
    >
      Search
    </button>
  </div>
  );
};
