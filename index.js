require('dotenv').config();
const express = require('express');
const routers = require('./routes');
const { errorMiddleware } = require('./middlewares');

const app = express();
app.use(express.json());

app.use('/user', routers.userRouter);
app.use('/login', routers.loginRouter);
app.use('/categories', routers.categoriesRouter);
app.use('/post', routers.blogPostRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
