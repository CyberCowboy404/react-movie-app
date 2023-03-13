import { makeAutoObservable } from "mobx";
import { apiClient } from "utils/ApiClient";

export default class FilmsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  getFilms() {
    return apiClient.get("/movies");
  }
}
