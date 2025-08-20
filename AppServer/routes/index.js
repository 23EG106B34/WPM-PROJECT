const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
/* GET homepage. */
router.get('/', function (req, res, next) {
    res.render("index", { title: "Varshini" });
});

module.exports = router;