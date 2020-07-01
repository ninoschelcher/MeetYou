let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
      title: 'Home',
      body: 'index'
    });
  })

module.exports = router;