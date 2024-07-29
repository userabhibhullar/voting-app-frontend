import axios from "axios";
import { setHeaders, url } from "../api/index";

export const getPolls = () => {
  return (dispatch) => {
    axios
      .get(`${url}/polls`, setHeaders())
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

export const createPoll = (newPoll) => {
  return (dispatch, getState) => {
    const uid = getState().auth._id;
    const author = getState().auth.name;
    axios
      .post(
        `${url}/polls`,
        {
          ...newPoll,
          uid: uid,
          author: author,
        },
        setHeaders()
      )
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
      .put(`${url}/polls/${id}`, poll, setHeaders())
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

export const deletePoll = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/polls/${id}`)
      .then((poll) => {
        dispatch({
          type: "DELETE_POLL",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const selectPoll = (id, selection) => {
  return (dispatch) => {
    axios
      .patch(`${url}/polls/${id}`, selection, setHeaders())
      .then((poll) => {
        dispatch({
          type: "SELECT_POLL",
          poll,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deselectPoll = (id, selection) => {
  return (dispatch) => {
    axios
      .patch(`${url}/polls/${id}`, selection, setHeaders())
      .then((poll) => {
        dispatch({
          type: "DESELECT_POLL",
          poll,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
