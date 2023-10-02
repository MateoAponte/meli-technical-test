import { ProductInfo } from '../../../common/interface/items';
import { Author } from '../../../types/Payload';

export interface ItemsState {
  items: Array<ProductInfo>;
  total: number;
  categories: Array<String>;
  author: Author;
}
