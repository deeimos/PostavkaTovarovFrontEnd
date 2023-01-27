import { action, makeAutoObservable } from "mobx";
import { logout } from "../server/user";

export class UserStore {
  isAuth: boolean;
  user: object;
  isLogOut: boolean;

  constructor() {
    this.isAuth = false;
    this.user = {};
    this.isLogOut = false;
    makeAutoObservable(this, { SetIsAuth: action });
  }

  SetIsAuth(data: object) {
    this.user = data;
    this.isAuth = true;
  }

  LogOut() {
    this.user = {};
    this.isAuth = false;
    this.isLogOut = true;
    logout();
  }

  ReloadPage(token: Object) {
      this.user = token;
      this.isAuth = true;
  }

  get IsAuth() {
    return this.isAuth;
  }

  get UserData() {
    return this.user;
  }
}
