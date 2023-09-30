import { ErrorHandler, validateInput } from '../helpers/errorHandler';
import { fetchItemById } from '../services/fetchByIdService';
import { fetchItemsByQuery } from '../services/fetchItemsService';

class ProductController {
  async getProductsByQuery(req: any, res: any) {
    try {
      validateInput(req.query.q, 410);
      const query: string = req.query.q as string;
      res.send(await fetchItemsByQuery(query));
    } catch (err) {
      res.status(400).send(ErrorHandler(err || {}));
    }
  }

  async getProductById(req: any, res: any) {
    try {
      validateInput(req.params.id, 420);
      const paramId: string = req.params.id;
      res.send(await fetchItemById(paramId));
    } catch (err) {
      res.status(400).send(ErrorHandler(err || {}));
    }
  }
}

export default new ProductController();
