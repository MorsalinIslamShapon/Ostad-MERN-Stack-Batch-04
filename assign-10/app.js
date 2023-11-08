const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/student-register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Set up routes and middlewares
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const worksRoutes = require('./routes/works');
const authVerifyMiddleware = require('./middlewares/authVerifyMiddleware');

app.use('/auth', authRoutes); // Authentication routes
app.use('/students', authVerifyMiddleware, studentRoutes); // CRUD for StudentsModel
app.use('/works', authVerifyMiddleware, worksRoutes); // CRUD for WorksModel

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
