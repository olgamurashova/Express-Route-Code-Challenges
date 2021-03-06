const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];
app.post('/soups', (req, res, next) => {
  const newSoup = req.query.name;
  soups.push(newSoup);
  res.status(201).send(newSoup);
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
