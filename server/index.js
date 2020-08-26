const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('morgan');
const apis = require('./router');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apis);

app.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Hello</h1>
      <a href="/api/fred/all">Go</a>
    </div>
  `)
})

app.listen(PORT, () => {
  console.log('Connected!');
});



