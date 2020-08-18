import { request } from "@/plugins/request";

export function getArticles(params) {
  return request({ url: "/api/articles", method: "GET", params });
}

export function addArticle(article) {
  return request({ url: "/api/articles", method: "POST", data:{article} });
}
export function deleteArticle(slug) {
  return request({ url: `/api/articles/${slug}`, method: "DELETE" });
}
export function updateArticle(slug, article) {
  return request({ url: `/api/articles/${slug}`, method: "PUT", data:{article}});
}

export function getYourArticles(params) {
  return request.get("/api/articles/feed", { params });
}
export function addFavorite(slug) {
  return request.post(`/api/articles/${slug}/favorite`);
}
export function removeFavorite(slug) {
  return request.delete(`/api/articles/${slug}/favorite`);
}
export function getArticleDetail(slug) {
  return request.get(`/api/articles/${slug}`);
}
export function getArticleComments(slug) {
  return request.get(`/api/articles/${slug}/comments`);
}
export function addArticleComments(slug, data) {
  return request.post(`/api/articles/${slug}/comments`, data);
}
export function deleteArticleComments(slug, id) {
  return request.delete(`/api/articles/${slug}/comments/${id}`);
}
