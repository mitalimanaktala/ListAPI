import express from 'express';

const router = express.Router();

// Minimal product routes to allow the server to start
router.get('/', (req, res) => {
  res.json({ message: 'Products route' });
});

export default router;
