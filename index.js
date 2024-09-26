const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const pulseData = [ 72, 75, 78, 80, 73, 76, 74, 79];
const spo2Data= [98, 97, 96, 99, 98, 97, 95, 96];
let index = 0;

app.get('/', (req, res) => {
    const _spo2 = spo2Data[index];
    const _bpm = pulseData[index];
    res.json({
        spo2: _spo2,
        bpm: _bpm
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setInterval(() => {
        index = (index + 1) % 8;
    }, 10000);
});