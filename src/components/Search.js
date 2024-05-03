export const Search = () => {
  return (
    <div className="serch flex justify-center items-center h-12">
      <div className="relative flex w-full max-w-2xl">
        <input
          className=" search-input flex-1  rounded-l-lg rounded-r-lg border border-gray-300 focus:outline-none"
          type="search"
          placeholder="Search Here..."
        />
        <button
          className="search-button relative bg-black text-white font-semibold hover:bg-gray-800 h-11 px-6 rounded-l-lg rounded-r-lg"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};
