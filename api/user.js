import { request } from "@/plugins/request";

export function login(data = { email: "", password: "" }) {
  return request.post("/api/users/login", data);
}

export function register(data) {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  });
}

export function follow(username) {
  return request.post(`/api/profiles/${username}/follow`);
}
export function unfollow(username) {
  return request.delete(`/api/profiles/${username}/follow`);
}
export function getUserProfile(username) {
  return request.get(`/api/profiles/${username}`);
}
export function updateUser(user) {
  return request.put(`/api/user`, { user });
}
export function getCurrentUser() {
  return request.get(`/api/user`);
}
