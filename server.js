const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.send('يرجى إدخال رابط باستخدام ?url=');
  request(targetUrl).pipe(res);
});

app.listen(3000, () => {
  console.log('الخادم يعمل على المنفذ 3000');
});
