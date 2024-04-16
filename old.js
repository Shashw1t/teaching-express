/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8000

app.use(bodyParser.json());

app.post('/', (req, res) => {
  // console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})