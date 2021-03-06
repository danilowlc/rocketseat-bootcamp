import { Router } from 'express';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsContoller';
import ProviderAppointmentsController from '@modules/appointments/infra/http/controllers/ProviderAppointmetsController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
