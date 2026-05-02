var express = require('express');
var router = express.Router();

// GET comments
router.get('/comments', async (req, res) => {
  try {
    const comments = []; 
    res.render('comments', { comments });
  } catch (error) {
    console.error('Error loading comments.', error);
    res.status(500).send('Error loading comments.');
  }
});

// POST comments
router.post('/comments', async (req, res) => {
  const { name, comment } = req.body;
  // Require both fields to be filled in
  if (!name.trim() || !comment.trim()) {
    return res.render('comments', { error: "Fields cannot be empty.", comments: [] });
  }
  // Require less than 800 characters
  if (comment.length > 800) {
    return res.render('comments', { error: "Comment is too long (max 800 chars).", comments: [] });
  }
  // Generate timestamp
  const timestamp = new Date().toLocaleString();
  try {
    res.redirect('/comments');
    }catch (error) {
        console.error('Error adding comment.', error);
        res.status(500).send('Error adding comment.');
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