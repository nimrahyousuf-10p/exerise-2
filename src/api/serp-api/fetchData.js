import * as APIService from "../../utils/axios/apiRequest";
export const news = (payload) => {
  return APIService.getRequest(
    "https://serpapi.com/search.json?q=Trump&tbm=nws&location=Dallas&api_key=de3741f14d58f96507b5fb7dbdda52445b1d449b3895b99610bbb6f53d667530",
    payload
  );
};
