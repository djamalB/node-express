const express = require('express')

const app = express()

const port = 3000

const productsRouter = require('./routes/productsRoutes');
const brandsRouter = require('./routes/brandsRoutes');

const productsController = require('./controllers/productsController');
const brandsController = require('./controllers/brandsController');


app.use(express.json());

app.use('/products', productsRouter);
app.use('/brands', brandsRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});