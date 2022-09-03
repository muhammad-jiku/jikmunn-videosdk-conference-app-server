require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ready for video chat app');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
