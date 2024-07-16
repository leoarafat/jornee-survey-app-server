import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FeelingsController } from './feelings.controller';
const router = Router();
router.post(
  '/create',
  auth(ENUM_USER_ROLE.USER),
  FeelingsController.createFeelingsLog,
);
router.get(
  '/emotions-overview',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeelingsController.getEmotionPercentages,
);
router.get(
  '/user-report',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeelingsController.allUserReports,
);
export const FeelingRoutes = router;
