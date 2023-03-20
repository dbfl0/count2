const express = require('express');
const app = express();
const { pool } = require('./db');

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT count FROM counter');
    const count = result.rows[0].count;
    await pool.query('UPDATE counter SET count = $1', [count + 1]);
    res.send(`Count: ${count}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/reset', async (req, res) => {
  try {
    await pool.query('UPDATE counter SET count = 0');
    res.send(`Counter has been reset`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
