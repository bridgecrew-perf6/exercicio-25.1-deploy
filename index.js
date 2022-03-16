const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const { ENV_MSG } = process.env

app.get('/', (_req, res) => {
  return res.status(200).send(`Está vivo!!! - Rodando em ${ENV_MSG}`);
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));