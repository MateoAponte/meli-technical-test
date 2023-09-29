import { ErrorTypes } from '../types/error';

export const ERROR_DICTIONARY: ErrorTypes = {
  NOT_FOUND: {
    status: 404,
    message: 'Petición fallida: El id consultado no se ha podido encontrar',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Petición fallida: El usuario no tiene permisos para este servicio',
  },
  UNKNOWN_FAILURE: {
    status: 400,
    message: 'Petición fallida: Contacte con el administrador para saber más',
  },
  INVALID_QUERY: {
    status: 410,
    message: 'Petición invalida: El parametro de búsqueda "q" es requerido',
  },
  INVALID_PARAM: {
    status: 420,
    message: 'Petición invalida: El parametro del Id es requerido',
  },
};
