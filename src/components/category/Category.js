import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import Rating from "components/rating/Rating";
import PropTypes from "prop-types";
import "./Category.scss";

function Category({ categoryName, items }) {
  return (
    <>
      <h3 className="category__title">{categoryName}</h3>
      <article className="category flex wrap">
        {items.map((item) => (
          <section key={item.id} className="category__block">
            <Link to={`/film/${item.id}`} className="category__item-link">
              <img src={item.backdrop} alt={item.title} />
              <div className="category__item-content">
                <Rating rating={item.imdb_rating} />
                <h4 className="category__item-title">{item.title}</h4>
                <p className="category__item-overview">{item.overview}</p>
                <button type="button" className="category__item-btn">
                  {" "}
                  Read More
                </button>
              </div>
            </Link>
          </section>
        ))}
      </article>
    </>
  );
}

// prop types
Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.array
};

export default observer(Category);
