import axios from "axios";
import { url } from "../api";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
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

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      console.log("token loaded");
      dispatch({
        type: "LOAD_USER",
        token,
      });
    } else {
      return null;
    }
  };
};

export const signIn = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/signin`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
