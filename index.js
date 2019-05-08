import express from 'express';
import data from './data/data.json';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`GET request with / on port ${port}`);
});
app.post('/newItem', (req, res) => {
  res.send(`POST request with /newItem on port ${port}`);
});
app.put('/item', (req, res) => {
  res.send(`PUT request with /newItem on port ${port}`);
});
app.delete('/item', (req, res) => {
  res.send(`DELETE request with /newItem on port ${port}`);
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
