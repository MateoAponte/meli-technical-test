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
/**
 * Corresponde a la firma establecida al consultar un Item por Id por medio de un Parametro "/:id"
 */
export interface DetailedItem {
  author: Author;
  item: DescribedProductInfo;
}

/**
 * Corresponde a la firma establecida al consultar todos los Items por medio de una Query
 */
export interface Items {
  author: Author;
  categories: Array<string>;
  items: Array<ProductInfo>;
}
