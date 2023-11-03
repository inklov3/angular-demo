import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from 'src/app/@shared/models/user';
import {TokenInfoDto} from "src/app/@shared/models/tokenInfoDto";
import {UserDto} from "src/app/@shared/models/userDto";
import {TOKEN_NAME, USER_LOCALSTORAGE_NAME} from "src/config/base-config";
import {doLogin} from "./auth-api.service";

@Injectable()
export class AuthService {
  constructor() {}

  login(identifier: string, password: string) {
    const userDto: UserDto = {
      identifier: identifier,
      password: password,
      email: null,
    }
    // chatGPT牛逼到炸、js异步吃我脑子
    return new Observable<TokenInfoDto>((observer) => {
      doLogin(userDto)
          .then((r) => {
            const tokenInfoDto: TokenInfoDto = r.data;
            observer.next(tokenInfoDto); // 发出结果
            observer.complete(); // 完成 Observable
          })
          .catch((e) => {
            observer.error('Please make sure you have input correct account and password'); // 发出错误
          });
    });
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(USER_LOCALSTORAGE_NAME);
  }

  setSession(tokenInfoDto: TokenInfoDto) {
    localStorage.setItem(TOKEN_NAME, tokenInfoDto.tokenValue);
    const user: User = {
      id: tokenInfoDto.id,
      role: tokenInfoDto.role,
      name: tokenInfoDto.name,
      email: undefined
    }
    this.setUser(user)
  }

  isUserLoggedIn() {
    return !!localStorage.getItem(TOKEN_NAME);
  }

  setUser(user: User) {
    localStorage.setItem(USER_LOCALSTORAGE_NAME, JSON.stringify(user))
  }

  getUser(): User | null {
    const userString = localStorage.getItem(USER_LOCALSTORAGE_NAME)
    if (userString !== null) {
      return JSON.parse(userString);
    }
    return null;
  }
}
