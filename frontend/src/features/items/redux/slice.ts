import { createSlice } from '@reduxjs/toolkit';
import { actions, fetchAsyncThunk } from './actions';
import { initialState } from './state';
import { ITEMS_LISTS_NAME } from './types';

export const itemsListSlice = createSlice({
  name: ITEMS_LISTS_NAME,
  initialState,
  reducers: {
    ...actions,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncThunk.pending, (state) => {
        console.log('Pending');
      })
      .addCase(fetchAsyncThunk.fulfilled, (state, { payload }) => {
        state.author = payload.author;
        state.categories = payload.categories;
        state.items = payload.items;
      })
      .addCase(fetchAsyncThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const { fetchItemList, updateItems, updateCategories, updateAuthor } = itemsListSlice.actions;
export default itemsListSlice.reducer;
