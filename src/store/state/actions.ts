import {SET_LOADING} from './types';

export const setIsLoading = (val: boolean) => {
  return {
    type: SET_LOADING,
    payload: val,
  };
};
