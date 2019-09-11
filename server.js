const express = require('express'),
      bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.json({ express: 'Successfully connected to server.' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));