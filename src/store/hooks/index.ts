import { UserCredential } from 'firebase/auth';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../index';

interface UserState {
  user: UserCredential | null;
}

const initialState: UserState = {
  user: null,
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
