const express = require('express');
const Connector = require('../models/Connector');
const router = express.Router();

// Fake OAuth authorize endpoint
router.get('/:provider/authorize', (req, res) => {
  const { provider } = req.params;
  res.send(`<html><body>
    Authorize ${provider}? 
    <a href="/auth/${provider}/callback?code=fakecode">Yes</a>
  </body></html>`);
});

// Fake OAuth callback
router.get('/:provider/callback', async (req, res) => {
  const { provider } = req.params;
  const conn = await Connector.create({
    provider,
    accountName: `${provider}_demo`,
    accessToken: 'fake-access',
    refreshToken: 'fake-refresh',
    expiresAt: new Date(Date.now() + 3600 * 1000),
    meta: { stub: true }
  });
  res.send(`<html><body>
    Connected ${provider}! connectorId: ${conn._id}
  </body></html>`);
});

module.exports = router;
