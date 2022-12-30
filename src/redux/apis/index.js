import axios from "axios";

export const apis = () => {
  return axios.create({
    baseURL: "https://api.tvmaze.com/search/shows?q=all",
  });
};
