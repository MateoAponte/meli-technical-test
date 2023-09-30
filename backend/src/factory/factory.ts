import { ApisNames } from '../constants/apisNames';
import { fetchItemApi } from './apiClasses/fetchItemById';
import { fetchItemsApi } from './apiClasses/fetchItemsByQuery';

/**
 * Factory para crear los archivos Api's que conectan a un endpoint en especifico
 */
export class ApiQueryFactory {
  createQuery(type: string) {
    switch (type) {
      case ApisNames.ITEM_BY_ID:
        return new fetchItemApi();
      case ApisNames.ITEMS_BY_QUERY:
        return new fetchItemsApi();
      default:
        throw new Error('Tipo de consulta no soportado');
    }
  }
}
