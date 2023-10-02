import { configureStore } from '@reduxjs/toolkit';

import itemsListReducer from '../features/items/redux/slice';
import detailedReducer from '../features/detailed/redux/slice';
import commonReducer from './slice';
import { ITEMS_LISTS_NAME } from '../features/items/redux/types';
import { DETAILED_NAME } from '../features/detailed/redux/types';
import { COMMON_STORE_NAME } from './types';

export const store = configureStore({
  reducer: {
    [ITEMS_LISTS_NAME]: itemsListReducer,
    [DETAILED_NAME]: detailedReducer,
    [COMMON_STORE_NAME]: commonReducer,
  },
});
