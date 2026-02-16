import api from "../api/api";

export async function login(usuario, password) {
  const response = await api.post("/login", { usuario, password });
  return response.data; // { token, user }
}

export function logout() {
  localStorage.removeItem("token");
}
