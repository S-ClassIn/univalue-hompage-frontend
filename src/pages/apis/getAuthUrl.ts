import { customAxios } from "@/utils/cusomAxios";

export const authUrl = async () => (await customAxios.get("/google")).data;
