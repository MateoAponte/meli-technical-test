import { BuildItemsData } from '../helpers/buildItemsData';
import { ApiQueryFactory } from '../factory/factory';

/**
 * Consulta el endpoint para obtener la totalidad de elementos que se relacionan a la búsqueda
 * @param {string} query Corresponde al parametro de la búsqueda por URL
 * @returns {Promise} Devuelve la data construida para el consumo del desarrollador
 */
const fetchItems = async (query: string) => {
  const itemQuery = new ApiQueryFactory().createQuery(`itemsByQuery`);
  const res = await itemQuery.fetchEndpoint(`?q=:${query}`);

  return BuildItemsData(await res.json());
};

export const fetchItemsByQuery = (query: string) => fetchItems(query);
