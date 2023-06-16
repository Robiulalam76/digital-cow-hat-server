import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import createUserZodValidate from './user.zodHanadler';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createUserZodValidate),
  UserController.createUser
);
router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
