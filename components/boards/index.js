const express = require('express');
const db = require('../../db/index');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        let results = await db.all();
        res.send(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        let result = await db.one(req.params.id);
        res.send(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
