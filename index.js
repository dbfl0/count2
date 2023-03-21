const express = require('express');
const app = express();
let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send(`Count: ${count}`);
});

app.get('/reset', (req, res) => {
  count = 0;
  res.send(`Counter has been reset`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

