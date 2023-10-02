import { DescribedProductInfo } from '../../../common/interface/items';
import { Author } from '../../../types/Payload';

export interface DetailedState {
  detailed: DescribedProductInfo;
  author: Author;
  category: Array<string>;
  selectedThumbnail: string;
}
