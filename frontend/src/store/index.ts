import { configureStore } from '@reduxjs/toolkit';

import itemsListReducer from '../features/items/redux/slice';
import detailedReduce from '../features/detailed/redux/slice';
import { ITEMS_LISTS_NAME } from '../features/items/redux/types';
import { DETAILED_NAME } from '../features/detailed/redux/types';

export const store = configureStore({
  reducer: {
    [ITEMS_LISTS_NAME]: itemsListReducer,
    [DETAILED_NAME]: detailedReduce,
  },
});
