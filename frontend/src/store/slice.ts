import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { actions } from './actions';
import { COMMON_STORE_NAME } from './types';

export const commonSlice = createSlice({
  name: COMMON_STORE_NAME,
  initialState,
  reducers: {
    ...actions,
  },
});

export const { updateLoading } = commonSlice.actions;
export default commonSlice.reducer;
