require('dotenv').config()

const Synapse = require('synapsenode');
const Client = Synapse.Client;

const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: '127.0.0.1',
  isProduction: false
});

// # createUser or getUser to access User class methods
const user = client.createUser({
  logins: [
    {
      email: 'test@synapsepay.com'
    }
  ],
  phone_numbers: [
    '901.111.1111'
  ],
  legal_names: [
    'Test User'
  ],
  extra: {
    supp_id: 'my_user_id',
    cip_tag: 1,
    is_business: false
  }
}, '127.0.0.1');

console.log(user);