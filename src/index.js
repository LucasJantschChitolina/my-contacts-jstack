const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log('##### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

const port = 3000;

app.listen(port, () => console.log(`🔥 Server started at http://localhost:${port}`));
