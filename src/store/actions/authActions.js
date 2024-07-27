import axios from "axios";
import { url } from "../api";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", token);
        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
