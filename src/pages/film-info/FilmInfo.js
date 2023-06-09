import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import { useParams } from "react-router-dom";
import "./FilmInfo.scss";

import Rating from "components/rating/Rating";
import { parseDate } from "utils/DateParse";
import { joinArray } from "utils/joinArray";

function FilmInfo() {
  const { filmsStore } = useContext(MobXProviderContext);
  const { id } = useParams();
  const film = filmsStore.getFilmInfoById(id);
  const date = parseDate(film.released_on);
  const dateFormat = `${date.monthName} ${date.day}, ${date.year}`;

  return (
    <article className="film-item">
      <div className="film-item__image-wrapper">
        <img
          src={film.backdrop}
          alt="Film Title"
          className="film-item__image"
        />
      </div>
      <div className="film-item__description">
        <div className="film-item__title-wrapper">
          <h2 className="film-item__title">{film.title}</h2>
          <Rating rating={film.imdb_rating} />
        </div>
        <p className="film-item__info">
          <b>Year:</b> {dateFormat}
        </p>
        <p className="film-item__info">
          <b>Length:</b> {film.length}
        </p>
        <p className="film-item__info">
          <b>Director:</b> {joinArray(film.director)}
        </p>
        <p className="film-item__info">
          <b>Genres:</b> {joinArray(film.genres)}
        </p>
        <p>
          <b>Cast: </b>
          {film.cast.join(", ")}
        </p>
        <p className="film-item__text">{film.overview}</p>
      </div>
    </article>
  );
}

export default observer(FilmInfo);
