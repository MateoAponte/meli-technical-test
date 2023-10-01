import numeral from 'numeral';

export const parsedCurrency = (value: string) => {
  return numeral(value).format('$0,0');
};
