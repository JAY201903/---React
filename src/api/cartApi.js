import {HttpRequest} from "./httpRequest";
export const getCartList = ({ data }) => {
  return HttpRequest.post("url", data);
};
