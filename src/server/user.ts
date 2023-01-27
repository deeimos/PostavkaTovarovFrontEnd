import { $host, $authHost} from "./index";

export const auth = async (login: string, password: string) => {
  console.log({ login, password });
  const { data } = await $host.post("auth", { login, password });
  localStorage.setItem("token", data.token);
  return data;
};

export const check = async () => {
  const { data } = await $authHost.get("auth");
  localStorage.setItem("token", data.token);
  return data;
};

export const logout = () => {
  localStorage.clear();
  // $authHost.interceptors.request.clear();
  $host.interceptors.request.clear();
};
