let express = require('express');
let router = express.Router();

router.get('/login', function (req, res) {
    res.render('login', {
      title: 'Login',
      body: 'login'
    });
  })

module.exports = router;