const express = require('express');

const publicweb = process.env.PUBLIC_WEB || './public';
const configResponse = process.env.CONFIG_RES || 'configuration.json';
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicweb));
app.get('/config', (req, res) => {
  res.sendFile(configResponse, {
    root: `${publicweb}/config`
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: publicweb
  });
});

app.listen(port);