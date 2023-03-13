import { makeAutoObservable } from "mobx";

export default class FilmsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  getBooks() {}
}
