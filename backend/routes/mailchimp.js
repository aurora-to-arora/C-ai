const express = require('express');
const router = express.Router();

// List audiences (stub)
router.get('/audiences', (req, res) => {
  res.json({ lists: [{ id: 'list_1', name: 'Local Demo List' }] });
});

// Add subscriber (stub)
router.post('/audiences/:id/subscribers', (req, res) => {
  res.json({ id: 'sub_' + Date.now(), ...req.body });
});

// Get subscriber by email (stub)
router.get('/subscribers', (req, res) => {
  res.json({ email: req.query.email, id: 'sub_123', status: 'subscribed' });
});

module.exports = router;
