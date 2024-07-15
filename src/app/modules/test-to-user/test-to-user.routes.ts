import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { TestUserController } from './test-to-user.controller';

const router = Router();

router.post(
  '/create-test-user',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  TestUserController.createUserTest,
);

router.get(
  '/my-tests',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  TestUserController.getTestUser,
);

export const TestUserRoutes = router;
