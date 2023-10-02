import itemsApi from '../../../api/itemsApi';
import { updateLoading } from '../../../store/slice';
import { ITEMS_LISTS_TYPES } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncThunk = createAsyncThunk(ITEMS_LISTS_TYPES.FETCH_ITEMS_LIST, async (query: string, { dispatch }) => {
  dispatch(updateLoading(true as any));
  return await itemsApi
    .fetchItemsByQuery(query)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => {
      dispatch(updateLoading(false as any));
    });
});

export const actions = {
  [ITEMS_LISTS_TYPES.UPDATE_ITEMS_LIST]: (state: any, action: any) => {
    state.items = action.payload;
  },
  [ITEMS_LISTS_TYPES.UPDATE_AUTHOR]: (state: any, action: any) => {
    state.author = action.payload;
  },
  [ITEMS_LISTS_TYPES.UPDATE_CATEGORIES]: (state: any, action: any) => {
    state.categories = action.payload;
  },
};
