// Create web server
// Run: node comments.js
// Test: curl -X POST -d "comment=Hello" http://localhost:3000/comments
// Test: curl -X GET http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/comments', function(req, res) {
  if (req.body.comment) {
    comments.push(req.body.comment);
    res.send('Comment added');
  } else {
    res.send('No comment found');
  }
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
