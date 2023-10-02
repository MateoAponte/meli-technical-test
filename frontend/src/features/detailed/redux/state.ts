import { DetailedState } from '../interfaces/state';

export const initialState: DetailedState = {
  detailed: {
    title: '',
    sold_quantity: 0,
    id: '',
    price: {},
    condition: '',
    picture: undefined,
    category: '',
    description: '',
    free_shipping: false,
  },
  author: {
    name: '',
    lastname: '',
  },
  category: [],
  selectedThumbnail: '',
};
