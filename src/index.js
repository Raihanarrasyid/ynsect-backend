const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const UserRouter = require('./routes/route.user');
const CartRouter = require('./routes/route.cart');
const ProductRouter = require('./routes/route.product');
const ForumRouter = require('./routes/route.forum');
const LikeRouter = require('./routes/route.like');
const CommentRouter = require('./routes/route.comment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', UserRouter);
app.use('/api', CartRouter);
app.use('/api', ProductRouter);
app.use('/api', ForumRouter);
app.use('/api', LikeRouter);
app.use('/api', CommentRouter);

app.listen(port, () => {
  console.log('Server aktif');
  console.log(`http://localhost:${port}`);
});
