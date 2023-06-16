/* eslint-disable consistent-type-definitions */
import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import createZodSchema from './user.zodHanadler';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
