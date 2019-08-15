const express = require('express');
const app = express();

const coursesRoutes = require('./api/routes/courses');

app.use('/courses', coursesRoutes);

module.exports = app;