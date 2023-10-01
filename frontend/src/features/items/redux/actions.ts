import itemsApi from '../../../api/itemsApi';
import { ITEMS_LISTS_TYPES } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncThunk = createAsyncThunk(ITEMS_LISTS_TYPES.FETCH_ITEMS_LIST, async (query: string) => {
  return await itemsApi
    .fetchItemsByQuery(query)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
});

export const actions = {
  [ITEMS_LISTS_TYPES.FETCH_ITEMS_LIST]: (state: any, action: any) => {
    console.log('Action');
  },
};
