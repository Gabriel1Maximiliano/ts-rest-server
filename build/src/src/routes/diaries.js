"use strict";
const express1 = require('express');
const router = express1.Router();
router.get('/', (_req, res) => {
    res.send('Fectching all entry diaries');
});
router.post('/', (_req, res) => {
    res.send('Saving diaries');
});
module.exports = router;
