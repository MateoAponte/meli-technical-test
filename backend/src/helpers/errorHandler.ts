import { ERROR_DICTIONARY } from '../constants/dictionary';
import { CustomError } from '../types/error';

/**
 * Función que maneja los estados de error dependiendo de un diccionario de Errores
 * @param {any} err Error que permitira crear el CustomError
 * @returns {CustomError} Objeto que consta de código de error y mensaje de error construido dependiendo del diccionario de errores
 */
export const ErrorHandler = (err: any): CustomError | undefined => {
  if (Object.keys(err).length === 0) {
    return ERROR_DICTIONARY.UNKNOWN_FAILURE;
  }
  const errors = ERROR_DICTIONARY;
  const error = Object.values(errors).find((customError: CustomError) => {
    return customError.status === err.status;
  });
  return error;
};

/**
 * Dispara un error si el status code no corresponde a un 200
 * @param {any} response Repuesta de un Endpoint la cual será revisada si el status code no corresponde a 200
 */
export const validateResponse = (response: any) => {
  if (response.status === 404) {
    throw ErrorHandler({
      status: 404,
    });
  }
};

/**
 * Revisa que el valor de búsqueda sea valido, si no es el caso, dispara a la función de ErrorHandler
 * @param {any} value Corresponde al valor de la búsqueda
 * @param {number} code Corresponde al código de error o del responde de un Endpoint
 */
export const validateInput = (value: any, code: number) => {
  if (value === undefined || value === null || value === '') {
    throw ErrorHandler({
      status: code,
    });
  }
};
