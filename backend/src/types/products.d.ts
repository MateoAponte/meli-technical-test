export type Author = {
  name: string;
  lastname: string;
};
export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};
export type Thumbnail = {
  url: string;
  id: string;
};
export type Picture = {
  image: string;
  gallery: Array<Thumbnail>;
};
