import request from "src/app/@core/services/request.service";
import {UserDto} from "src/app/@shared/models/userDto";

const BASE: string = "/auth"

const DO_LOGIN_API: string = "/doLogin"

export function doLogin(user: UserDto) {
    const url: string = BASE + DO_LOGIN_API
    return request.post(url, user, {headers: {'Content-Type': 'application/json'}})
}