const pollsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POLLS":
      return action.polls.data;
    default:
      return state;
  }
};

export default pollsReducer;
