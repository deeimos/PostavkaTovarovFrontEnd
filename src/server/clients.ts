import { $host, $authHost } from "./index";

export const getClients = async (arg: string) => {
  const clients = await $authHost.get("clients" + arg);
  return clients.data;
};

export const addClient = async (client: object) => {
    const { data } = await $authHost.post("clients", client);
    return data;
  };

export const deleteClient = async (arg: string) => {
    const { data } = await $authHost.delete("clients" + arg);
    return data;
  };
