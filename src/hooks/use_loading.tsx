import {RootState} from '../store';
import {setIsLoading} from '../store/state/actions';
import {useDispatch, useSelector} from 'react-redux';

export const useLoading = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store: RootState) => store.state).isLoading;

  function changeLoading(val: boolean) {
    dispatch(setIsLoading(val));
  }

  return {isLoading, changeLoading};
};
