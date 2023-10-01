import { BuildDetailedData } from '../helpers/buildDetailedData';
import { ApiQueryFactory } from '../factory/factory';
import { ApisNames } from '../constants/apisNames';

/**
 * Consulta el endpoint de Description By Item
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve una promesa correspondiendo a la consulta de un endpoint
 */
const fetchItemDescription = (param: string) => {
  const query = new ApiQueryFactory().createQuery(ApisNames.ITEM_BY_ID);
  const itemDescription = query.fetchEndpoint(`/${param}/description`);
  return itemDescription;
};

/**
 * Consulta el endpoint de cada item para obtener la información detallada de este
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve una promesa correspondiendo a la consulta de un endpoint
 */
const fetchItem = (param: string) => {
  const query = new ApiQueryFactory().createQuery(ApisNames.ITEM_BY_ID);
  const itemById = query.fetchEndpoint(`/${param}`);
  return itemById;
};

const fetchCategory = (param: string) => {
  const query = new ApiQueryFactory().createQuery(ApisNames.CATEGORIES_BY_ID);
  const categoryById = query.fetchEndpoint(`/${param}`);
  return categoryById;
};

/**
 * Ejecuta todos los endpoints necesarios para obtener la información del detallado de un item
 * @param {string} param Corresponde al parametro del Id del item
 * @returns {Promise} Devuelve la data construida para el consumo del desarrollador
 */
const fetchById = async (param: string) => {
  const description = await fetchItemDescription(param);
  const detailed = await fetchItem(param);
  const category = await fetchCategory(detailed.category_id);
  const res = await Promise.all([description, detailed, category]);
  const resMapped = { ...res[0], ...res[1], ...res[2] };
  return BuildDetailedData(resMapped);
};

export const fetchItemById = (param: string) => fetchById(param);
