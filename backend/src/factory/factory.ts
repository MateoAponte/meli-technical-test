import { fetchItemsApi } from './apiClasses/fetchItemsByQuery';
import { fetchItemApi } from './apiClasses/fetchItemById';

/**
 * Clase para la construcción de Apis dependiendo al fin de cada una de estas
 */
export class ApiQueryFactory {
  /**
   * Permite crear una clase para realizar las peticiones
   * @param {string} type Corresponde al tipo de Clase que se va a construir para realizar las peticiones
   * @returns La clase correspondiendete
   */
  createQuery(type: string) {
    switch (type) {
      case 'itemById':
        return new fetchItemApi();
      case 'itemsByQuery':
        return new fetchItemsApi();
      default:
        throw new Error('Tipo de consulta no soportado');
    }
  }
}
