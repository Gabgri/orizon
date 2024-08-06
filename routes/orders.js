const express = require('express');
const router = express.Router();

// Endpoints
router.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

router.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
  
router.put('/', (req, res) => {
    res.send('PUT request to the homepage')
})
  
router.delete('/', (req, res) => {
    res.send('DELETE request to the homepage')
})
  

module.exports = router;