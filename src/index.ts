import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();
// middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
