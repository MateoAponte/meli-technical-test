import { Api } from '../api';

/**
 * Clase correspondiente al Api que realiza un Fetch de una categoría correspondiente
 */
export class fetchCategory extends Api {
  constructor() {
    super(`${process.env.SERVER_SEARCH_BY_CATEGORY}`);
  }
}
