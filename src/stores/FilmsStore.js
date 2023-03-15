import { makeAutoObservable } from "mobx";
import { apiClient } from "utils/ApiClient";

export default class FilmsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async getAllFilms() {
    this.moviesData = this.moviesData || (await apiClient.get("/movies"));
    return this.moviesData;
  }

  getCategories() {
    if (this.moviesData && this.moviesData.movies) {
      const genres = this.moviesData.movies.reduce(
        (acc, cur) => acc.concat(cur.genres),
        []
      );
      this.moviesData.genres = new Set(genres);
    }

    return this.moviesData.genres;
  }

  getFilmsByCategory(category) {
    let moviesByCategory = [];
    if (this.moviesData && this.moviesData.movies) {
      moviesByCategory = this.moviesData.movies.filter((movie) =>
        movie.genres.includes(category)
      );
    }

    return moviesByCategory;
  }
}
