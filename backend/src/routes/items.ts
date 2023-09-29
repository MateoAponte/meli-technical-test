import express from 'express';
import { fetchItemsByQuery } from '../services/fetchItemsService.ts';
import { fetchItemById } from '../services/fetchByIdService.ts';
import { ErrorHandler, validateInput } from '../helpers/errorHandler.ts';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    validateInput(req.query.q, 410);
    const query: string = req.query.q as string;
    res.send(await fetchItemsByQuery(query));
  } catch (err) {
    res.status(400).send(ErrorHandler(err || {}));
  }
});

router.get('/:id', async (req, res) => {
  try {
    validateInput(req.params.id, 420);
    const paramId: string = req.params.id;
    res.send(await fetchItemById(paramId));
  } catch (err) {
    res.status(400).send(ErrorHandler(err || {}));
  }
});

export default router;
