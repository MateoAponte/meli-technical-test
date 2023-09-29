import { fetchItemsApi } from './apiClasses/fetchItemsByQuery';
import { fetchItemApi } from './apiClasses/fetchItemById';

export class ApiQueryFactory {
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
