import {request} from "@/plugins/request";

export function getTags() {
  return request.get("/api/tags");
}
