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

// const body = {
//   "type": "ACH-US",
//   "info": {
//     "nickname": "Fake Account",
//     "account_num": "1232225674134",
//     "routing_num": "051000017",
//     "type": "PERSONAL",
//     "class": "CHECKING"
//   }
// }

// client.getUser('5d746f6e8843a6305f774dbf')
//     .then(user => user.createNode(body))
//     .then(({ data }) => console.log(data))
//     .catch(error => console.log(error))

// client.getUser('5d746f6e8843a6305f774dbf')
//   .then(user => user.triggerDummyTransactions('5d7ab1b80b8bf3010345e8bb'))
//   .then(({ data }) => console.log('data ', data))
//   .catch(error => console.log(error))

// client.getUser('5d746f6e8843a6305f774dbf')
//   .then(user => user.getUserTransactions())
//   .then(({ data }) => console.log(data.trans))
//   .catch(error => console.log(error));

client.getUser('5d746f6e8843a6305f774dbf')
.then(user => user.getAllUserNodes())
.then(({ data }) => console.log(data))
.catch(error => console.log(error));