import { makeAutoObservable } from "mobx";

export default class SearchController {
    constructor(filmsStore) {
        console.log("🚀 ~ file: Search.ctrl.js:5 ~ SearchController ~ constructor ~ filmsStore:", filmsStore)
        this.films = filmsStore;
        makeAutoObservable(this);
    }

    getSearchResults() {
        return this.films.searchResults;
    }

    handleSearch = async (e) => {
        console.log("🚀 ~ file: Search.ctrl.js:16 ~ SearchController ~ handleSearch= ~ e.target.value:", e.target.value)
        const res = await this.films.searchFilms(e.target.value);
        console.log("🚀 ~ file: Search.ctrl.js:16 ~ SearchController ~ handleSearch= ~ res:", res)
    }

}