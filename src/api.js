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

// client.createUser({
//   logins: [
//     {
//       email: 'test@synapsefi.com'
//     }
//   ],
//   phone_numbers: [
//     '901.111.1111',
//     'test@synapsefi.com'
//   ],
//   legal_names: [
//     'Test User'
//   ],
//   documents: [
//     {
//       email: 'test@test.com',
//       phone_number: '901.111.1111',
//       ip: '::1',
//       name: 'Test User',
//       alias: 'Test',
//       entity_type: 'M',
//       entity_scope: 'Arts & Entertainment',
//       day: 2,
//       month: 5,
//       year: 1989,
//       address_street: '944 Market St.',
//       address_city: 'SF',
//       address_subdivision: 'CA',
//       address_postal_code: '94102',
//       address_country_code: 'US',
//       virtual_docs: [
//         {
//           document_value: '2222',
//           document_type: 'SSN'
//         }
//       ],
//       physical_docs: [
//         {
//           document_value: 'data:image/gif;base64,SUQs==',
//           document_type: 'GOVT_ID'
//         }
//       ],
//       social_docs: [
//         {
//           document_value: 'https://www.facebook.com/valid',
//           document_type: 'FACEBOOK'
//         }
//       ]
//     }
//   ],
//   extra: {
//     supp_id: '122eddfgbeafrfvbbb',
//     cip_tag: 1,
//     is_business: false
//   }
// },
// '127.0.0.1'
// )
// .then(( user ) => {
// console.log('user ', user);
// }).catch((e) => {
//   console.log(e);
// });

// let user;

exports.getUserTransactions = client.getAllUsers().then(({ data }) => {
    return client.getUser(data.users[0]._id);
  }).then((user) => {
    return user.getUserTransactions();
  }).then(({ data }) => {
    // console.log('data ', data);
    console.log(data.trans);
    return data.trans;
  }).catch((error) => {
    console.log(error);
  });




