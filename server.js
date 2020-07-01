const express = require('express');
const app = express();
const port = 3000;

const index = require('src/routes/index.js');

app
  .set('view engine', 'ejs')
  .use(express.static('/public'))
  .get('/', index);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));