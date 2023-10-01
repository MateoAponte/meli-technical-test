import express from 'express';
import searchRouter from './routes/items.ts';

const app = express();
app.use(express.json());
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

require('dotenv').config();
const PORT = process.env.SERVER_PORT;

app.use('/api/items', searchRouter);

app.listen(PORT, () => {
  console.log('Server running');
});
