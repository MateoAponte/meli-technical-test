import { COMMON_STORE_TYPES } from './types';

export const actions = {
  [COMMON_STORE_TYPES.UPDATE_LOADING]: (state: any, action: any) => {
    state.loading = action.payload;
  },
};
