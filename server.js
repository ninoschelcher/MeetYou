/* eslint-disable no-undef */
const express = require('express');
const app = express();
const port = 3000;
const sassMiddleware = require('node-sass-middleware');
const router = require('./src/router.js');

app
  .set('view engine', 'ejs')
  .set('views', 'src/views')
  .use(
    sassMiddleware({
        src: __dirname + '/src/scss', 
        dest: __dirname + '/public/css',
        prefix: '/css',
        debug: true,       
    })
 )
  .use(express.static('public'))
  .use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));