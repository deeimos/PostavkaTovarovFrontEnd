import { $host, $authHost } from "./index";

export const getProviders = async (arg: string) => {
  const clients = await $authHost.get("providers" + arg);
  return clients.data;
};

export const addProvider = async (client: object) => {
    const { data } = await $authHost.post("providers", client);
    return data;
  };

export const deleteProvider = async (arg: string) => {
    const { data } = await $authHost.delete("providers" + arg);
    return data;
  };
