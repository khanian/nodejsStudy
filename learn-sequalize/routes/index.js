var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  User.findAll()
  .then((users) => {
    res.render('sequelize', { title: 'Express sequelize', users});
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

module.exports = router;
