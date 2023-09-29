import { LocalAuthor } from '../constants/author';
import { DetailedItem } from '../interfaces/items';

export const BuildDetailedData = (data: any): DetailedItem => {
  return {
    author: LocalAuthor,
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: data.original_price,
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: data.plain_text,
    },
  };
};
