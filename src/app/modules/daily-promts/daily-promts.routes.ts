import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { DailyPromptsController } from './daily-promts.controller';

const router = Router();

router.post(
  '/create-prompt',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  DailyPromptsController.insertIntoDB,
);

router.get(
  '/my-prompt',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  DailyPromptsController.myPromptsAnswer,
);

export const TestUserRoutes = router;
