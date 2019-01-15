const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 7500;

app.use(express.static('dist'));
const servedPath = path.join(__dirname, 'dist/index.html');

app.get('*', (req, res) => {
  res.sendFile(servedPath);
});

app.listen(port, () => console.log(`Server running on ${port}`));
