import AuthStore from "./UserStore";
import FilmsStore from "./FilmsStore";

export default class RootStore {
  constructor() {
    this.auth = new AuthStore(this);
    this.filmsStore = new FilmsStore(this);
  }
}
