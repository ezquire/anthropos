require('dotenv').config();

const Synapse = require('synapsenode');
const Client = Synapse.Client;

const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: '127.0.0.1',
  isProduction: false
});

const nodeOptions = {
  type: 'DEPOSIT-US',
  info: {
    nickname: 'Test Checking'
  }
}

const user = client.getUser('5d746f6e8843a6305f774dbf');

user.createNode(nodeOptions);

user.triggerDummyTransactions('<NODE_ID>')
  .then(({ data }) => {
    console.log('data ', data);
  });