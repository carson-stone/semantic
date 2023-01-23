import { Router } from 'express';

const router = Router();

router.post('/test', (req, res) => {
  res.send('hi');
});

export default router;
