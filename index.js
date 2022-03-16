const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  return res.status(200).send('Está vivo!!!');
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));