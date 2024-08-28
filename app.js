// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.send('App is running');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
