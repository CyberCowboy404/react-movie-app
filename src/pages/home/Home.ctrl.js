import { makeAutoObservable } from "mobx";

export default class FilmsController {
  constructor() {
    makeAutoObservable(this);
  }
}
