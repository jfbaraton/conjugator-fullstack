const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/conjugations');
const errorHandler = require('./middleware/errorHandler');

// Create Express app, a handler for HTTP requests
const app = express();

//adds security-related HTTP headers
app.use(helmet());
//enables Cross-Origin Resource Sharing.
app.use(cors());
//Without it, Express cannot understand JSON data in requests
app.use(express.json());

// declare some endpoints under the path /api
// for instance
// /api
// /api/health
// /api/about
app.use('/api', routes);

// Error handling middleware should be the last middleware added
app.use(errorHandler);

// export the app (HTTP handler) to be used in index.js to listen to port 5000
module.exports = app;
