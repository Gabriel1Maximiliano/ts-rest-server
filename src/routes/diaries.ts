const express1 = require('express');

const router = express1.Router();

router.get('/', (_req:any,res:any):any => {
    res.send('Fectching all entry diaries')
});

router.post('/', (_req:any,res:any):any=> {
    res.send('Saving diaries')
})
module.exports = router;