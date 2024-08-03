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

router.get(
  '/average-test',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  TestUserController.averageTestPercentage,
);
router.get(
  '/average-test-scoreType/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  TestUserController.getScoreTypeDistributionByTestId,
);
router.get(
  '/test-details/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  TestUserController.getTestDetails,
);
export const TestUserRoutes = router;
