const express = require('express');
const v1ConvertFontRouter = require('./v1/routes/convertFontRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/routes", v1ConvertFontRouter);

/*app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});*/

app.listen(PORT, () => { console.log( `Server listening on port ${PORT}` ) });
