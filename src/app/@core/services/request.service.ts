import axios from "axios";
import {BASE_URL} from "src/config/base-config"


const Request = axios.create({
    baseURL: BASE_URL,
    timeout: 6000,
    withCredentials: false
});
Request.interceptors.response.use(
    response => {
        switch (response.status) {
            case 401:
        }
        return response
    }
)

export default Request;
