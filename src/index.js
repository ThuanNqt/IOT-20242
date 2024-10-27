const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080; // cấu hình port
const app = express();

app.use(bodyParser.json()); // cho phép truyền json qua body

app.post('/api/v1/iot', (req, res) => {
    // lấy các giá trị từ body gửi lên
    const { deviceId, qrCodeId, qrCodeValue } = req.body;

    // trả về phản hồi thành công với code là 200 kèm theo các giá trị
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
