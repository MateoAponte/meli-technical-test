import { Api } from '../Api';

export class fetchItemsApi extends Api {
  constructor() {
    super(`${process.env.SERVER_SEARCH_BY_QUERY_ENDPOINT}`);
  }
}
