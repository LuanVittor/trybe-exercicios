import { REQUEST_API, GET_REDDIT } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  topics: '',
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REDDIT:
      return {
        ...state,
        isLoading: true,
        topics: action.data
      }
    default:
      return state;
  }
}

export default reducer;