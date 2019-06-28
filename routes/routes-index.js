const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const loginService = require('../services/login-service');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/login', urlencodedParser, function(req, res) {
  const info = loginService.authorise(req.body.username, req.body.password);
  res.json(info);
});

module.exports = router;