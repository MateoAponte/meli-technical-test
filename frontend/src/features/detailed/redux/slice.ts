import { createSlice } from '@reduxjs/toolkit';
import { actions, fetchItemDetailedThunk } from './actions';
import { initialState } from './state';
import { DETAILED_NAME } from './types';

export const detailedSlice = createSlice({
  name: DETAILED_NAME,
  initialState,
  reducers: {
    ...actions,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItemDetailedThunk.pending, (state) => {
        console.log('Pending');
      })
      .addCase(fetchItemDetailedThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.author = payload.author;
        state.detailed = payload.item;
      })
      .addCase(fetchItemDetailedThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const { fetchDetailed } = detailedSlice.actions;
export default detailedSlice.reducer;
