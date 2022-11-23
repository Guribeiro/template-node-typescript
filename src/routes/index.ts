import { Router } from 'express';

const routes = Router();

routes.get('/api', (request, response) => {
  return response.status(200).json({ ok: true });
});

export default routes;
