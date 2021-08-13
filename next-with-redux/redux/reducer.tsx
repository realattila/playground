import ACTIONS from "./actions";

import { HYDRATE } from "next-redux-wrapper";

export interface initialState {
  counter: number;
}

export const initialState: initialState = {
  counter: 0,
};

export interface actionType {
  type: string;
  payload: any;
}

function reducer(state: initialState = initialState, action: actionType) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case ACTIONS.ADD_COUNTER: {
      return { ...state, counter: state.counter + 1 };
    }

    default:
      return state;
  }
}

export default reducer;
