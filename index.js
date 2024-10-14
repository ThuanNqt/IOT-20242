const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.post('/api/v1/iot', (req, res) => {
    const { deviceId, qrCodeId, qrCodeValue } = req.body;

    res.status(200).json({
        message: "Get data successful!",
        code: 200,
        deviceId,
        qrCodeId,
        qrCodeValue
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
