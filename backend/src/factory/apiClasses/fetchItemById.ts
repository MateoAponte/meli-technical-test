import { Api } from '../api';

export class fetchItemApi extends Api {
  constructor() {
    super(`${process.env.SERVER_GET_ITEM_ENDPOINT}`);
  }
}
