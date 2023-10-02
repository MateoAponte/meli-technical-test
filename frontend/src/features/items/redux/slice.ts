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
      .addCase(fetchAsyncThunk.pending, () => {})
      .addCase(fetchAsyncThunk.fulfilled, (state, { payload }) => {
        state.author = payload.author;
        state.categories = payload.categories;
        state.total = payload.total;
        state.items = payload.items;
      })
      .addCase(fetchAsyncThunk.rejected, (state) => {
        state.author = {
          name: '',
          lastname: '',
        };
        state.categories = [];
        state.total = 0;
        state.items = [];
      });
  },
});

export const { fetchItemList, updateItems, updateCategories, updateAuthor } = itemsListSlice.actions;
export default itemsListSlice.reducer;
