import { Router } from 'express';

import SessionsControler from '@modules/users/infra/http/controller/SessionsController';

const sessionRouter = Router();
const sessionsControler = new SessionsControler();


sessionRouter.post('/', sessionsControler.create );

export default sessionRouter;
