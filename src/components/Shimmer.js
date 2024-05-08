export const Shimmer = () => {
  const generateShimmerCards = () => {
    const shimmerCards = [];
    const numShimmerCards = 9;
    for (let i = 0; i < numShimmerCards; i++) {
      shimmerCards.push(
        <div className="shimmer-card" key={i}>
          <div className="first-block"></div>
          <div className="second-block"></div>
          <div className="third-block"></div>
        </div>
      );
    }
    return shimmerCards;
  };

  return <div className="shimmer-container">
    <div className="search-bar">
      <div className="search">
        <div className="searchh-button"></div>
      </div>
    </div>
    <div className="filter-container">
      <div className="filter-btn"></div>
    </div>

    {generateShimmerCards()}
    </div>;
};
