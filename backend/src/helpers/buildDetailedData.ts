import { LocalAuthor } from '../constants/author';
import { DetailedItem } from '../interfaces/items';

const mapPictures = (data: any) => {
  return data.map((item: any) => ({
    url: item.url,
    id: item.id,
  }));
};

/**
 * Función que permite mapear la información de un item y agregar un Autor
 * @param {any} data Objeto que va a ser mapeada
 * @returns {DetailedItem} Objeto mappeado para que solo muestre los campos necesarios y el autor del proyecto
 */
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
      picture: {
        image: data.thumbnail,
        gallery: mapPictures(data.pictures),
      },
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: data.plain_text,
      category: data.name,
    },
  };
};
