import { observer } from "mobx-react";
import Rating from "components/rating/Rating";
import PropTypes from "prop-types";
import './Category.scss';

function Category({ categoryName, items }) {
    console.log("🚀 ~ file: Category.js:6 ~ Category ~ items:", items)
    return (
        <>
            <h3 className="category--title">{categoryName}</h3>
            <article className="category flex wrap">
                {items.map((item) => (
                    <section key={item.id} className="category--block">
                        <a href={`/film/${item.id}`} className="category--item-link">
                            <img src={item.backdrop} alt={item.title} />
                            <div>
                                <Rating rating={item.imdb_rating} />
                                <h4 className="category--item-title">{item.title}</h4>
                            </div>
                        </a>
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