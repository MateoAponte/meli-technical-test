import express from 'express';
import searchRouter from './routes/items.ts';

const app = express();
app.use(express.json());

require('dotenv').config();
const PORT = process.env.SERVER_PORT;

app.use('/api/items', searchRouter);

app.listen(PORT, () => {
  console.log('Server running');
});
