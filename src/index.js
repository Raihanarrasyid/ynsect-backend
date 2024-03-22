const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const UserRouter = require('./routes/route.user');
const CartRouter = require('./routes/route.cart');

app.use(bodyParser.json());
app.use('/api', UserRouter);
app.use('/api', CartRouter);

app.listen(port, () => {
  console.log('Server aktif');
  console.log(`http://localhost:${port}`);
});
