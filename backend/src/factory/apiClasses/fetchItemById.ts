import { Api } from '../Api';

export class fetchItemApi extends Api {
  constructor() {
    super(`${process.env.SERVER_GET_ITEM_ENDPOINT}`);
  }
}
