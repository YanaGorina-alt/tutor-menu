require('dotenv').config(); // Always require and configure near the top
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('./config/database'); // Connect to the database



const app = express();

app.use(logger('dev')); //logger middleware function will log HTTP requests and responses.
// This can be useful for debugging, monitoring, and analyzing the application's behavior.
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// TEST: Ensureing the React Dev Server send AJAX calls to the Express Server
// app.get('/test', (req, res)=> {
//   res.json({message: "Hello, I'm the Server"});
// })

app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});