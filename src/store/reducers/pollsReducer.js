const pollsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POLLS":
      return action.polls.data;
    case "CREATE_POLL":
      return [...state, action.poll.data];
    case "UPDATE_POLL":
      return state.map((poll) => {
        if (poll._id === action.poll.data._id) {
          return action.poll.data;
        } else {
          return poll;
        }
      });
    case "DELETE_POLL":
      return state.filter((poll) => poll._id !== action.id);
    case "DESELECT_POLL":
    case "SELECT_POLL":
      return state.map((poll) => {
        if (poll._id === action.poll.data._id) {
          return action.poll.data;
        } else {
          return poll;
        }
      });
    default:
      return state;
  }
};

export default pollsReducer;
