const convertFonttwoService = require("../services/convertFonttwoService");

const getAllConvertFonts = (req, res) => {
    const allConvertFonts = convertFonttwoService.getAllConvertFonts(req);
    res.send('Get All Convert Fonts WOFF2');
}

const getOneConvertFont = (req, res) => {
    const convertFont = convertFonttwoService.getOneConvertFont(req.params.fonttwoInfo);
    res.send(`Get font woff2: ${req.params.fonttwoInfo}`);
}

module.exports = {
    getAllConvertFonts,
    getOneConvertFont,
}