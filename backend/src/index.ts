import express from 'express';
import searchRouter from './routes/search.ts';

const app = express();
app.use(express.json());

const PORT = 3010;

require('dotenv').config();

app.get('/ping', (_req, res) => {
  console.log('Some one pinged');
  res.send('pong');
});

app.use('/api/search', searchRouter);

app.listen(PORT, () => {
  console.log('Server running');
});
