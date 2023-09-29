import { CustomError } from '../interfaces/error';

export type CustomError = {
  status: number;
  message: string;
};

export type ErrorTypes = {
  NOT_FOUND: CustomError;
  UNAUTHORIZED: CustomError;
  UNKNOWN_FAILURE: CustomError;
  INVALID_QUERY: CustomError;
  INVALID_PARAM: CustomError;
};
