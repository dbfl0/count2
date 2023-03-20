const express = require('express');
const app = express();
let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send(`Count: ${count}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
