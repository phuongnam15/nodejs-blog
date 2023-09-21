require('dotenv').config();
require('../connectDB');

import express from 'express';
import initRoutes from './routes';
import middleware  from './middleware';
import configViewEngine from './config/viewEngine';

const app = express();
const port = process.env.PORT || 8000;

configViewEngine(app);
middleware(app);
initRoutes(app);

app.listen(port, () => { // listen được dùng để bắt đầu máy chủ web và lắng nghe yêu cầu từ client trên một cổng cụ thể
  console.log(`Example app listening on port http://localhost:${port}`)
}); 