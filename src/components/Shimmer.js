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

  return <div className="shimmer-container">{generateShimmerCards()}</div>;
};
