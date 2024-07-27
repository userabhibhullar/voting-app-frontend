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

export const createPoll = (poll) => {
  return (dispatch) => {
    axios
      .post(`${url}/polls`, poll)
      .then((poll) => {
        dispatch({
          type: "CREATE_POLL",
          poll,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updatePoll = (poll, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/polls/${id}`, poll)
      .then((poll) => {
        dispatch({
          type: "UPDATE_POLL",
          poll,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
