import fetch from 'node-fetch';
import { ErrorHandler, validateResponse } from '../helpers/errorHandler';

export class Api {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchEndpoint(endpoint: string) {
    console.log(this.baseUrl + endpoint);

    return await fetch(this.baseUrl + endpoint)
      .then((res) => {
        validateResponse(res);
        return res;
      })
      .catch((err) => {
        throw ErrorHandler(err);
      });
  }
}
