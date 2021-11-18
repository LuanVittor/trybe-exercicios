import { REQUEST_API, GET_REDDIT } from "../actions";

const INITIAL_STATE =  {
  isLoading: false,
  topics: '',
}

function topics(state=INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
      case GET_REDDIT:
        return {
          ...state,
          isLoading: false,
          topics: action.data
        }
        default:
          return state;
  }
}

export default topics;