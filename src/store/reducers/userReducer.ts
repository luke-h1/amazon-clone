import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle
import { RootState } from '..';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInToAccount: (state, action: PayloadAction<User>) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    signOutFromAccount: state => {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

export const { signInToAccount, signOutFromAccount } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
