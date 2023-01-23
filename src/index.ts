import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRouter from './routers/userRouter';

dotenv.config();

const app = Express();
// middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
