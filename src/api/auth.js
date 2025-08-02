import { secureTmdb, tmdb } from "./tmdb";

export const validateLogin = async (username, password, request_token) => {
  await secureTmdb.post("/authentication/token/validate_with_login", {
    username,
    password,
    request_token,
  });
};

export const tokenResponse = async () => {
  const response = await tmdb.get("/authentication/token/new");
  return response.data;
};

export const sessionRes = async (request_token) => {
  const response = await tmdb.post("/authentication/session/new", {
    request_token,
  });
  return response.data;
};
