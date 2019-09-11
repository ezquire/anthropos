const express = require('express'),
      bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.send({ express: 'successfully connected to the server.' });
});

app.get('/api/:user', (req, res) => {
  const user = synapse_client.getUser(req.params.user)
  res.send(user);
});

app.get('/api/:user/transactions', (req, res) => {
  res.send({call: req.params.user });
});

app.listen(port, () => console.log(`Listening on port ${port}`));