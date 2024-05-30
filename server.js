require("dotenv").config();

const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./routes/user.route')
const categoryRouter = require('./routes/category.route')
const productRouter = require('./routes/product.route')
const storeRouter = require('./routes/store.route')
const cartRouter = require('./routes/cart.route')
const transactionRouter = require('./routes/transaction.route')

app.use('/users', userRouter)
app.use('/categories', categoryRouter)
app.use('/product', productRouter)
app.use('/store', storeRouter)
app.use('/cart', cartRouter)
app.use('/transaction', transactionRouter)

app.listen(port, () => {
  console.log("Listening on port " + port);
});
