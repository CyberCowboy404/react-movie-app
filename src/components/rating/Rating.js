import { FaStar } from "react-icons/fa";
import "./Rating.scss";
import PropTypes from "prop-types";

function Rating({ rating }) {
  if (!rating) {
    return null;
  }
  return (
    <span className="rating">
      <b>IMDb:</b>
      <FaStar />
      <span>{rating}</span>
    </span>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
