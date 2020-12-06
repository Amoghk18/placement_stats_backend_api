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
const blogs = require('./routes/blog');
const courses = require('./routes/course');
const ebooks = require('./routes/ebook');
const links = require('./routes/link');
const schedules = require('./routes/schedule');
const success_stories = require('./routes/success_story');

// middleware imports
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());

app.use(logger);

// routing 
app.use('/api/v1/experiences', experiences);
app.use('/api/v1/charts', charts);
app.use('/api/v1/blogs', blogs);
app.use('/api/v1/courses', courses);
app.use('/api/v1/ebooks', ebooks);
app.use('/api/v1/links', links);
app.use('/api/v1/schedules', schedules);
app.use('/api/v1/successstories', success_stories);

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
