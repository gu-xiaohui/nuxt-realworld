import axios from "axios";
const request = axios.create({
  baseURL: "https://conduit.productionready.io",
  // baseURL: "http://realworld.api.fed.lagounews.com",
  headers: {
    Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA5Nzk3LCJ1c2VybmFtZSI6InhpYW9odWkiLCJleHAiOjE2MDI2NDMzMjl9.p99bgvhGi6tWmBbqTF2yKNo3mPjYOfOfqpJLCZbj_mY`,
  },
});

export default request;
