const mongoose = require('mongoose');

const ConnectorSchema = new mongoose.Schema({
  provider: { type: String, enum: ['mailchimp', 'zoho'], required: true },
  accountName: String,
  accessToken: String,
  refreshToken: String,
  expiresAt: Date,
  meta: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('Connector', ConnectorSchema);
