const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post Get')
});

module.exports = router;