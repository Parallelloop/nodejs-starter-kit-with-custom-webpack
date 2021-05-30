import 'dotenv/config';
import express from 'express';

import setupDatabase from './src/config/database';
import applyMiddlewares from './src/middlewares';
import router from './src/routes';

const app = express();

setupDatabase();
applyMiddlewares(app);


app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to port ${process.env.PORT}`);
});
export default app;
