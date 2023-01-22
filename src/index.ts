import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen('3000', () => {
  console.log('running');
});
