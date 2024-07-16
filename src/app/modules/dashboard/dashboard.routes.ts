import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { DashboardController } from './dashboard.controller';
const router = Router();
router.get(
  '/total-count',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.totalCount,
);
router.get(
  '/earning-analytics',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  DashboardController.getLast12MonthsEarningsOverview,
);

export const DashboardRoutes = router;
