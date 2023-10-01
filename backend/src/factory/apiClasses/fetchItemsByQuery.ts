import { Api } from '../api';

/**
 * Clase correspondiente al Api que realiza un Fetch para la búsqueda de todos los elementos
 */
export class fetchItemsApi extends Api {
  constructor() {
    super(`${process.env.SERVER_SEARCH_BY_QUERY_ENDPOINT}`);
  }
}
