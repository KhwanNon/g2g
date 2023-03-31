import {StateModel} from './model/info';
import {SET_LOADING} from './types';

const initialState: StateModel = {
  isLoading: false,
};

type action = {type: string; payload: any};

function stateReducer(state = initialState, action: action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}

export default stateReducer;
