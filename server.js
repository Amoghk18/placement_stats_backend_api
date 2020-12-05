const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db');

// Environtment variables
dotenv.config({ path: "./config/config.env" });

// Connect to DB
 connectDB();

// routes
const experiences = require('./routes/experiences');
const charts = require('./routes/chart');

// middleware imports
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());

app.use(logger);

// routing 
app.use('/api/v1/experiences', experiences);
app.use('/api/v1/charts', charts);

// error Handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(
  port,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
);

// handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
