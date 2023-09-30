import express from 'express';
import ItemsController from '../controller/ItemsController.ts';

/**
 * Router que se usa para las rutas relacionadas a la búsqueda de Items
 */
const router = express.Router();

router.get('/', async (req, res) => {
  await ItemsController.getProductsByQuery(req, res);
});

router.get('/:id', async (req, res) => {
  await ItemsController.getProductById(req, res);
});

export default router;
