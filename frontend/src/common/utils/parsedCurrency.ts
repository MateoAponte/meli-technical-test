import numeral from 'numeral';

export const parsedCurrency = (value: string) => {
  return numeral(value).format('$0,0');
};
export const parsedNumber = (value: string) => {
  return numeral(value).format('0,0');
};
