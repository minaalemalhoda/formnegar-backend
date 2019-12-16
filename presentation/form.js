const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const formHandler = require('../application/form');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to FormNegar app');
});


app.get('/api/form/:id', (req, res) => {
  try {
    const {id} = req.params;
    const {form, error} = formHandler.fetch(id);
    if (error) {
      res.error(error);
    }
    res.send({form});
  } catch (error) {
    res.status(500).send('Oops, something is going wrong, please try again');
  }
});

app.post('/api/forms', (req, res) => {
  try {
    const form = req.body;
    formHandler.insert(form);
    res.send('form inserted');
  } catch (error) {
    res.status(500).send('Oops, something is going wrong, please try again');
  }
});

app.get('/api/forms', (req, res) => {
  try {
    const forms = formHandler.fetchAllForms();
    res.send({forms});
  } catch (error) {
    res.status(500).send('Oops, something is going wrong, please try again');
  }
});

app.post('/api/forms/:id', (req, res) => {
  try {
    const form = req.body;
    formHandler.printForm(form);
    res.send({form})
  } catch (error) {
    res.status(500).send('Oops, something is going wrong, please try again');
  }
});


app.listen(PORT, () =>
  console.log('FormNegar app listening on port 3000!'),
);