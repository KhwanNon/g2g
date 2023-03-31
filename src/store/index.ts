import {createStore, combineReducers} from 'redux';
import state from './state';

const rootReducer = combineReducers({
  state: state,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
