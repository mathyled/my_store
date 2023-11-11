const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/header', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});


app.get('/nueva-ruta', (req, res) => {
  res.json({
    nombre: 'mathias',
    apellido: 'Ledesma',
    edad: 28,
  });
});

routerApi(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
