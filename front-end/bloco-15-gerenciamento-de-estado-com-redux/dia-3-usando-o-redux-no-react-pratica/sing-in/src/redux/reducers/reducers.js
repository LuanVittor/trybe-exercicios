import { LOGIN } from "../actions/actions";

const INITIAL_STATE = {
  logado: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logado: action.payload,
      }
    default:
      return state;
  }
}