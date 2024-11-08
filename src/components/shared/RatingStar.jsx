import PropTypes from "prop-types";
// RatingStar Component to handle filled, half, and empty stars
const RatingStar = ({ filled }) => {
  return (
    <svg
      className="w-5 h-5"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half-fill">
          <stop offset="50%" stopColor="#F76B15" />
          <stop offset="50%" stopColor="#D3D3D3" />
        </linearGradient>
      </defs>
      <path
        d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z"
        fill={
          filled === true
            ? "#FCA120" // Filled star color
            : filled === "half"
            ? "url(#half-fill)" // Half-filled star using gradient
            : "#D3D3D3" // Empty star color
        }
      />
    </svg>
  );
};

const RatingStars = ({ rating }) => {
  const stars = [];

  // Round the rating to 1 decimal place (optional)
  const roundedRating = Math.round(rating * 2) / 2;

  // Loop through numbers from 1 to 5 and determine the state of each star (filled, half, or empty)
  for (let i = 1; i <= 5; i++) {
    if (roundedRating >= i) {
      stars.push("filled");
    } else if (roundedRating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="flex">
      {stars.map((state, index) => (
        <RatingStar
          key={index}
          filled={state === "filled" ? true : state === "half" ? "half" : false}
        />
      ))}
    </div>
  );
};

export default RatingStars;

// PropTypes validation for RatingStar
RatingStar.propTypes = {
  filled: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["half"])])
    .isRequired,
};


RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
}