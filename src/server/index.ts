import axios from "axios";
import { url } from "./server";

const $host = axios.create({
  baseURL: url.serverURL,
});

const $authHost = axios.create({
  baseURL: url.serverURL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = localStorage.getItem("token");
  console.log(config);
  return config;
};

$authHost.interceptors.request.use(authInterceptor);


export { $host, $authHost};
