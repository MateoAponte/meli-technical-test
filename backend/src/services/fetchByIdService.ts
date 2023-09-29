import { BuildDetailedData } from '../helpers/buildDetailedData';
import { ApiQueryFactory } from '../factory/factory';

/**
 * Consulta el endpoint de Description By Item
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve una promesa correspondiendo a la consulta de un endpoint
 */
const fetchItemDescription = (param: string) => {
  const itemById = new ApiQueryFactory().createQuery('itemById');
  return itemById.fetchEndpoint(`/${param}/description`);
};

/**
 * Consulta el endpoint de cada item para obtener la información detallada de este
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve una promesa correspondiendo a la consulta de un endpoint
 */
const fetchItem = (param: string) => {
  const itemById = new ApiQueryFactory().createQuery('itemById');
  return itemById.fetchEndpoint(`/${param}`);
};

/**
 * Ejecuta todos los endpoints necesarios para obtener la información del detallado de un item
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve la data construida para el consumo del desarrollador
 */
const fetchById = async (param: string) => {
  const description = await fetchItemDescription(param);
  const detailed = await fetchItem(param);
  const res = await Promise.all([description.json(), detailed.json()]);
  const resMapped = { ...res[0], ...res[1] };
  return BuildDetailedData(resMapped);
};

export const fetchItemById = (param: string) => fetchById(param);
