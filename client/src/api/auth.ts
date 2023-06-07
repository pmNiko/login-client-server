import { FormData, Login, Profile } from "interfaces/types";

const uri = "http://localhost:4000";
const headers = { "Content-Type": "application/json" };

export const loginApi = async (form: FormData): Promise<Login> => {
  const resp = await fetch(`${uri}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(form),
  });

  const data = await resp.json();
  return data;
};

export const profileApi = async (token: string): Promise<Profile> => {
  const resp = await fetch(`${uri}/profile`, {
    method: "POST",
    headers: { ...headers, authorization: `Bearer ${token}` },
  });

  const data = await resp.json();
  return data;
};
