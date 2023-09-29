import { ERROR_DICTIONARY } from '../constants/dictionary';
import { CustomError } from '../types/error';

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

export const validateResponse = (response: any) => {
  if (response.status === 404) {
    throw ErrorHandler({
      status: 404,
    });
  }
};

export const validateInput = (value: any, code: number) => {
  if (value === undefined || value === null || value === '') {
    throw ErrorHandler({
      status: code,
    });
  }
};
