import { Author, Description, Price, SoldQuantity } from '../types/products';

export interface ProductInfo {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
export interface DescribedProductInfo extends ProductInfo {
  sold_quantity: number;
  description: string;
}
export interface DetailedItem {
  author: Author;
  item: DescribedProductInfo;
}

export interface Items {
  author: Author;
  categories: Array<string>;
  items: Array<ProductInfo>;
}
