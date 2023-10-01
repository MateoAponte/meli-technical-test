import { configureStore } from '@reduxjs/toolkit';

import itemsListReducer from '../features/items/redux/slice';
import { ITEMS_LISTS_NAME } from '../features/items/redux/types';

export const store = configureStore({
  reducer: {
    [ITEMS_LISTS_NAME]: itemsListReducer,
  },
});
