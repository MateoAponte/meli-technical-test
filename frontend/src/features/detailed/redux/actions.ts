import { createAsyncThunk } from '@reduxjs/toolkit';
import { DETAILED_TYPES } from './types';
import itemsApi from '../../../api/itemsApi';
import { updateLoading } from '../../../store/common/slice';

export const fetchItemDetailedThunk = createAsyncThunk(DETAILED_TYPES.FETCH_DETAILED, async (param: string, { dispatch }) => {
  dispatch(updateLoading(true as any));
  return await itemsApi
    .fetchItemById(param)
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
  [DETAILED_TYPES.UPDATE_SELECTED_THUMBNAIL]: (state: any, action: any) => {
    state.selectedThumbnail = action.payload;
  },
};
