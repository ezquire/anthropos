require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  Synapse = require('synapsenode'),
  Client = Synapse.Client;

const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: '127.0.0.1',
  isProduction: false
});

// This method is very slow, I would not use this in production, but
// for time's sake I am resorting to brute force
const findUser = (email, users) => {
  for (let i = 0; i < users.length; ++i) {
    for (let j = 0; j < users[i].logins.length; ++i) {
      if (users[i].logins[j].email === email) {
        return users[i]._id;
      } else {
        return "";
      }
    }
  }
}

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/api/test', (req, res) => {
  res.send({ express: 'successfully connected to the server.' });
});

app.get('/api/:user', (req, res) => {
  client.getUser(req.params.user)
    .then(user => res.send(user))
    .catch(error => console.log(error));
});

app.get('/api/:user/name', (req, res) => {
  client.getUser(req.params.user)
    .then(user => res.send(user.legal_names[0]))
    .catch(error => console.log(error));
});

app.get('/api/user-by-email/:email', (req, res) => {
  client.getAllUsers()
    .then(({ data }) => findUser(req.params.email, data.users))
    .then(id => res.send({ id }))
    .catch(error => console.log(error));
});

app.get('/api/:user/recent-transactions', (req, res) => {
  const options = {
    page: 1,
    per_page: 4
  }
  client.getUser(req.params.user)
    .then(user => user.getUserTransactions(options))
    .then(({ data }) => res.send(data))
    .catch(error => console.log(error));
});

app.get('/api/:user/all-transactions', (req, res) => {
  client.getUser(req.params.user)
    .then(user => user.getUserTransactions())
    .then(({ data }) => res.send(data))
    .catch(error => console.log(error));
});

app.get('/api/:user/accounts', (req, res) => {
  client.getUser(req.params.user)
    .then(user => user.getAllUserNodes())
    .then(({ data }) => res.send(data))
    .catch(error => console.log(error));
});

app.listen(port, () => console.log(`Listening on port ${port}`));