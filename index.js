const express = require('express');

const { userRouter } = require('./routes');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());
app.use('/user', userRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
