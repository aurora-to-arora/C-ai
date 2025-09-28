const express = require('express');
const router = express.Router();

// Create lead (stub)
router.post('/leads', (req, res) => {
  res.json({ id: 'lead_' + Date.now(), ...req.body });
});

// Update contact (stub)
router.put('/contacts/:id', (req, res) => {
  res.json({ id: req.params.id, ...req.body });
});

// Search by email (stub)
router.get('/search', (req, res) => {
  res.json([{ id: 'lead_1', Email: req.query.email }]);
});

module.exports = router;
