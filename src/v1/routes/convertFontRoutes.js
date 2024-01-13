const express = require('express');
const router = express.Router();
const fontController = require('../../controllers/convertFontController');

router
    .get('/', (req, res) => fontController.getAllConvertFonts(req, res))
    .get('/:fonttwoInfo', (req, res) => fontController.getOneConvertFont(req, res));

module.exports = router;