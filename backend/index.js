const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST ,PUT, DELETE
// Query Params: req.query (Filtros, ordenação, paginação ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro )

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello Omnistack',
  });
});

app.listen(3333);