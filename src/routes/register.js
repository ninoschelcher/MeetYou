let express = require('express');
let router = express.Router();

router.get('/register', function (req, res) {
    res.render('register', {
      title: 'Register',
      body: 'register'
    });
  })

module.exports = router;