const express = require('express');
const Workflow = require('../models/Workflow');
const router = express.Router();

// Get all workflows
router.get('/', async (req, res) => {
  const workflows = await Workflow.find().sort({ createdAt: -1 });
  res.json(workflows);
});

// Create or update workflow
router.post('/', async (req, res) => {
  const { id, nodes, edges } = req.body;

  let wf;
  if (id) {
    wf = await Workflow.findByIdAndUpdate(id, { nodes, edges }, { new: true });
  } else {
    wf = await Workflow.create({ nodes, edges });
  }
  res.json(wf);
});

// Get workflow by ID
router.get('/:id', async (req, res) => {
  const wf = await Workflow.findById(req.params.id);
  if (!wf) return res.status(404).json({ error: 'Workflow not found' });
  res.json(wf);
});

module.exports = router;
