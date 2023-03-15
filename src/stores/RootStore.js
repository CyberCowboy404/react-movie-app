import FilmsStore from "./FilmsStore";

export default class RootStore {
  constructor() {
    this.filmsStore = new FilmsStore(this);
  }
}
