import { Api } from '../api';

/**
 * Clase correspondiente al Api que realiza un Fetch del detallado de cada item
 */
export class fetchItemApi extends Api {
  constructor() {
    super(`${process.env.SERVER_GET_ITEM_ENDPOINT}`);
  }
}
