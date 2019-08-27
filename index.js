const express = require('express');
const server = require('./api/server.js');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000; // Dynamic port assignment via .env
const baseUrl = '/api/v1';

// app.use(`${baseUrl}`, routes);
// app.use(`${baseUrl}/auth`, routes);
app.all('*', (req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});

server.listen(port, () =>
  console.log(`
--------------------------------------------------------------
          Server is live on http://localhost:${port}

GraphQL Playground is live on http://localhost:${port}/playground
--------------------------------------------------------------
  `)
);
