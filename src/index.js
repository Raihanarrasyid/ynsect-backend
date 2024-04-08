const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const UserRouter = require('./routes/route.user');
const CartRouter = require('./routes/route.cart');
const ProductRouter = require('./routes/route.product');
const ForumRouter = require('./routes/route.forum');
const LikeRouter = require('./routes/route.like');
const CommentRouter = require('./routes/route.comment');
const AgendaRouter = require('./routes/route.agenda');
const OrderRouter = require('./routes/route.order');

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
  methods: 'GET, POST, PUT, DELETE, PATCH'
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', UserRouter);
app.use('/api', CartRouter);
app.use('/api', ProductRouter);
app.use('/api', ForumRouter);
app.use('/api', LikeRouter);
app.use('/api', CommentRouter);
app.use('/api', AgendaRouter);
app.use('/api', OrderRouter);

app.listen(port, () => {
  console.log('Server aktif');
  console.log(`http://localhost:${port}`);
});
