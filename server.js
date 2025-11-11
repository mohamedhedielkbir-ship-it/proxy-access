const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.send('Please provide a URL using ?url=');
  }
  request(url).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
