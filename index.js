//https://github.com/nachovigilante/avanzado-bases-de-datos/tree/main/restaurant

const express = require('express');
const app = express();
const port = 9000;
const menu = require('./menu.json');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`>Server running on port ${port}`);
});

// Crear un endpoint GET /menu que devuelva el menú completo del restaurante.
app.get('/menu', (req, res) => {
  res.json (menu);
});

// Crear un endpoint GET /menu/:id que devuelva un plato del menú. El id del plato debe ser pasado como parámetro en la ruta.
app.get('/menu/:id', (req, res) => {
  const id = req.params.id;
  const plato = menu.find((plato) => plato.id === id);
  res.json(plato);
});