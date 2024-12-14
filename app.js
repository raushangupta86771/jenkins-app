const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log("4 commit")

app.get('/health', (req, res) => res.send('App is running 4'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
