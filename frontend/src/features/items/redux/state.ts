import { ItemsState } from '../interfaces/state';

export const initialState: ItemsState = {
  items: [],
  total: 0,
  categories: [],
  author: {
    name: '',
    lastname: '',
  },
};
