const pollsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POLLS":
      return action.polls.data;
    case "CREATE_POLL":
      return [...state, action.poll.data];
    default:
      return state;
  }
};

export default pollsReducer;
