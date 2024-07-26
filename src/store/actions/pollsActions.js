import axios from "axios";
import { url } from "../api/index";

export const getPolls = () => {
  return (dispatch) => {
    axios
      .get(`${url}/polls`)
      .then((polls) => {
        dispatch({
          type: "GET_POLLS",
          polls,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
