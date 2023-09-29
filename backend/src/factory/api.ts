import fetch from 'node-fetch';
import { ErrorHandler, validateResponse } from '../helpers/errorHandler';

/**
 * Clase que permite tener de forma centralizada una clase para realizar consultas
 */
export class Api {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Consulta de forma dinamica los endpoints configurados
   * @param {string} endpoint
   * @returns {Promise} Retorna una promesa resuelta
   */
  async fetchEndpoint(endpoint: string) {
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
