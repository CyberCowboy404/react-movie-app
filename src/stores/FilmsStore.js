import { makeAutoObservable, observable, action } from "mobx";
import { apiClient } from "utils/ApiClient";

export default class FilmsStore {
  moviesData = {
    movies: [],
    searchResults: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllFilms() {
    const { movies } = await apiClient.get("/movies");
    this.moviesData.movies = movies;
    return this.moviesData;
  }

  getCategories() {
    let result = [];
    if (this.moviesData && this.moviesData.movies) {
      const genres = this.moviesData.movies.reduce(
        (acc, cur) => acc.concat(cur.genres),
        []
      );
      result = new Set(genres);
    }

    return [...result];
  }

  getFilmsByCategory(category) {
    let moviesByCategory = [];
    if (this.moviesData.movies) {
      moviesByCategory = this.moviesData.movies.filter((movie) =>
        movie.genres.includes(category)
      );
    }

    return moviesByCategory;
  }

  async searchFilms(query) {
    const { movies } = await apiClient.get(`/movies?q=${query}`);
    this.moviesData.searchResults = movies;
    console.log("🚀 ~ file: FilmsStore.js:47 ~ FilmsStore ~ searchFilms ~ this.moviesData.searchResults:", movies)
    return movies;
  }

  getFilmInfoById(id) {
    let filmInfo = {};
    if (this.moviesData && this.moviesData.movies) {
      filmInfo = this.moviesData.movies.find((movie) => movie.id === id);
    }

    return filmInfo;
  }
}
