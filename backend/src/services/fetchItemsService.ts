import { ApisNames } from '../constants/apisNames';
import { ApiQueryFactory } from '../factory/factory';
import { BuildItemsData } from '../helpers/buildItemsData';

/**
 * Consulta el endpoint para obtener la totalidad de elementos que se relacionan a la búsqueda
 * @param {string} query Corresponde al parametro de la búsqueda por URL
 * @returns {Promise} Devuelve la data construida para el consumo del desarrollador
 */
const fetchItems = async (query: string) => {
  const search = new ApiQueryFactory().createQuery(ApisNames.ITEMS_BY_QUERY);
  const res = search.fetchEndpoint(`?q=:${query}`);
  return BuildItemsData(await res);
};

export const fetchItemsByQuery = (query: string) => fetchItems(query);
