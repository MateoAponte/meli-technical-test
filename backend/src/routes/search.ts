import express from 'express';
import { getSearchByQuery } from '../services/searchService.ts';

const router = express.Router();

router.get('/', async (_req, res) => {
  res.send(await getSearchByQuery());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary');
});

export default router;
