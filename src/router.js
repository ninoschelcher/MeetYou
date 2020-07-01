const router = require('express').Router();
const getIndex = require('./routes/index');
const getLogin = require('./routes/login');
const getRegister = require('./routes/register');


router
  .get('/', getIndex)
  .get('/login', getLogin)
  .get('/register', getRegister)

module.exports = router;