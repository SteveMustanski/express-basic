import express from 'express';
import data from './data/data.json';

const app = express();
const port = 3000;

// set up static paths
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use(express.json());

app.get('/', (req, res) => {
  res.json(data);
});

app.get(
  '/item/:id',
  (req, res, next) => {
    let user = Number(req.params.id);
    res.send(data[user]);
    next();
  },
  (req, res) => {
    console.log('This was executed as next was called.');
  },
);

app.post('/newItem', (req, res) => {
  res.send(req.body);
});

app
  .route('/item')
  .get((req, res) => {
    res.send(`GET request with /newItem on port ${port}`);
  })
  .put((req, res) => {
    res.send(`PUT request with /newItem on port ${port}`);
  })
  .post((req, res) => {
    res.send(`POST request with /newItem on port ${port}`);
  })
  .delete((req, res) => {
    res.send(`DELETE request with /newItem on port ${port}`);
  });

app.get('/redirect', (req, res) => {
  res.redirect('http://linkedin.com');
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
