import { Router } from 'express';
import multer from 'multer';
import updatedConfig from '@config/upload';

import UsersController from '@modules/users/infra/http/controller/UsersController';
import UsersAvatarController from '@modules/users/infra/http/controller/UsersAvatarController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';


const usersRouter = Router();
const upload = multer(updatedConfig);
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

usersRouter.post('/', usersController.create );

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
