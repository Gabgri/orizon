const express = require('express');
const router = express.Router();

// Endpoints
router.post('/', function (req, res) {
  res.send('POST request to the homepage')
  res.status(201)
})

router.put('/', function (req, res) {
  res.send('PUT request to the homepage')
})

router.delete('/', function (req, res) {
  res.send('DELETE request to the homepage')
})

module.exports = router;