import { BuildItemsData } from '../helpers/buildItemsData';
import { ApiQueryFactory } from '../factory/factory';

const fetchItems = async (query: string) => {
  const itemQuery = new ApiQueryFactory().createQuery(`itemsByQuery`);
  console.log('Fetch Items');

  const res = await itemQuery.fetchEndpoint(`?q=:${query}`);

  return BuildItemsData(await res.json());
};

export const fetchItemsByQuery = (query: string) => fetchItems(query);
