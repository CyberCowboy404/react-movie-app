import { makeAutoObservable } from "mobx";

export default class FilmsController {
  constructor(filmsStore) {
    this.films = filmsStore;
    makeAutoObservable(this);
  }

  getCategories() {
    this.categories = this.films.getCategories();
    return this.categories;
  }
  
  getFilmsByCategory(category) {
    return this.films.getFilmsByCategory(category);
  }
}
