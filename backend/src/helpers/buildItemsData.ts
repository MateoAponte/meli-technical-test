import { Items, ProductInfo } from '../interfaces/items';
import { LocalAuthor } from '../constants/author';

export const BuildItemsData = (data: any): Items => {
  const mappedData: ProductInfo[] = data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.price,
        amount: item.installments.amount,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping,
    };
  });
  return {
    author: LocalAuthor,
    items: mappedData,
    categories: data.results[0].tags as Array<string>,
  };
};
