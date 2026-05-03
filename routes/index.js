var express = require('express');
var router = express.Router();

// GET comments
router.get('/comments', function(req, res, next) {
  let limit = parseInt(req.query.limit) || 5; ;

  try {
    req.db.query('SELECT * FROM comments ORDER BY id DESC LIMIT ?;', [limit], (error, results) => {
      if (error) {
        console.error('Error fetching comments:', error);
        return res.status(500).send('Error fetching comments');
      }

      res.render('comments', { 
        comments: results,
        nextLimit: limit + 5
      });
    });
  } catch (error) {
    console.error('Error loading page:', error);
    res.status(500).send('Error loading page');
  }
});

// POST comments
router.post('/comments', function (req, res, next) {
  const { name, comment } = req.body;
  const timestamp = new Date().toLocaleString();

  // Require name and comment fields
  if (!name || !name.trim() || !comment || !comment.trim()) {
    return res.status(400).send('Name and Comment are required.');
  }

  try {
    // Insert name, comment, and timestamp
    req.db.query('INSERT INTO comments (name, comment, timestamp) VALUES (?, ?, ?);', 
    [name, comment, timestamp], (err, results) => {
      if (err) {
        console.error('Error adding comment:', err);
        return res.status(500).send('Error adding comment');
      }
      console.log('Comment added successfully:', results);
      res.redirect('/comments');
    });
  } catch (error) {
    console.error('Error processing request', error);
    res.status(500).send('Error adding comment');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET comments page. */
router.get('/comments', function(req, res, next) {
  res.render('comments');
});

module.exports = router;