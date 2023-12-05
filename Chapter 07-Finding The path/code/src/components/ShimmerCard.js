// Defining the ShimmerCard component
const ShimmerCard = () => {
  return (
    // JSX structure for the ShimmerCard component
    <div className="shimmer-card stroke animate">
      <div className="shimmer-img"></div>
      <div className="shimmer-inner">
        {/* Two shimmer divs */}
        <div className="div2"></div>
        {/* Main shimmer container with three sub-divs */}
        <div className="div1main">
          <div className="div1left"></div>
          <div className="div1mid"></div>
          <div className="div1right"></div>
        </div>
        {/* Another shimmer div */}
        <div className="div2"></div>
      </div>
    </div>
  );
};

// Exporting the ShimmerCard component
export default ShimmerCard;
