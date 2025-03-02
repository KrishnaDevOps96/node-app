const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use PORT from environment or default to 8080

app.use(express.json());

app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
