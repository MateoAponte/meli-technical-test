import { BuildDetailedData } from '../helpers/buildDetailedData';
import { ApiQueryFactory } from '../factory/factory';

const fetchItemDescription = (param: string) => {
  const itemById = new ApiQueryFactory().createQuery('itemById');
  console.log('By Id Description');

  return itemById.fetchEndpoint(`/${param}/description`);
};

const fetchItem = (param: string) => {
  const itemById = new ApiQueryFactory().createQuery('itemById');
  console.log('By Id Common');

  return itemById.fetchEndpoint(`/${param}`);
};

const fetchById = async (param: string) => {
  const description = await fetchItemDescription(param);
  const detailed = await fetchItem(param);
  const res = await Promise.all([description.json(), detailed.json()]);
  const resMapped = { ...res[0], ...res[1] };
  return BuildDetailedData(resMapped);
};

export const fetchItemById = (param: string) => fetchById(param);
