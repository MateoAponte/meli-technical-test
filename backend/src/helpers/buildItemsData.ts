import { Items, ProductInfo } from '../interfaces/items';
import { LocalAuthor } from '../constants/author';

/**
 * Función que permite mapear la información de un item y agregar un Autor
 * @param {any} data Objeto que va a ser mapeada
 * @returns {Items} Arreglo de objetos mapeados para que solo muestre los campos necesarios y el autor del proyecto
 */
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
