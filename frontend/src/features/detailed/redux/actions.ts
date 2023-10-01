import { createAsyncThunk } from '@reduxjs/toolkit';
import { DETAILED_TYPES } from './types';
import itemsApi from '../../../api/itemsApi';

export const fetchItemDetailedThunk = createAsyncThunk(DETAILED_TYPES.FETCH_DETAILED, async (param: string) => {
  return await itemsApi
    .fetchItemById(param)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
});

export const actions = {
  [DETAILED_TYPES.UPDATE_ITEM]: (state: any, action: any) => {
    state.item = action.payload;
  },
};
