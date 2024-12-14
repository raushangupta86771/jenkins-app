const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log("3 commit")

app.get('/health', (req, res) => res.send('App is running'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
