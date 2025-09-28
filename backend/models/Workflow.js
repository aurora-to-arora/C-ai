const mongoose = require('mongoose');
const shortid = require('shortid');

const WorkflowSchema = new mongoose.Schema({
  name: String,
  flowId: { type: String, default: () => shortid.generate() },
  nodes: [mongoose.Schema.Types.Mixed],
  edges: [mongoose.Schema.Types.Mixed],
  status: { type: String, enum: ['draft', 'active', 'failed', 'success'], default: 'draft' },
  lastRun: Date,
  logs: [String]
}, { timestamps: true });

module.exports = mongoose.model('Workflow', WorkflowSchema);
