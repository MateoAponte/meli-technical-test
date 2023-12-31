import { createAsyncThunk } from '@reduxjs/toolkit';
import { DETAILED_TYPES } from './types';
import itemsApi from '../../../api/itemsApi';
import { updateLoading } from '../../../store/common/slice';
import { DetailedState } from '../interfaces/state';

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
  [DETAILED_TYPES.UPDATE_SELECTED_THUMBNAIL]: (state: DetailedState, action: any) => {
    state.selectedThumbnail = action.payload;
  },
  [DETAILED_TYPES.UPDATE_CATEGORY]: (state: DetailedState, action: any) => {
    state.category = action.payload;
  },
  [DETAILED_TYPES.UPDATE_AUTHOR]: (state: DetailedState, action: any) => {
    state.author = action.payload;
  },
  [DETAILED_TYPES.UPDATE_DETAILED]: (state: DetailedState, action: any) => {
    state.detailed = action.payload;
  },
};
