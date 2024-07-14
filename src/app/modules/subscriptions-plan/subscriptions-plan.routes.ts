import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

import { SubscriptionsPlanController } from './subscriptions-plan.controller';
const router = express.Router();
router.post(
  '/create-plan',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SubscriptionsPlanController.createSubscriptionPlan,
);
router.post(
  '/create-plan-free-user',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SubscriptionsPlanController.createSubscriptionFreeUserToDB,
);
router.get(
  '/all-plans',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  SubscriptionsPlanController.getAllSubscriptionPlan,
);
router.get(
  '/all-fre-plans',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SubscriptionsPlanController.getAllFreeUser,
);
router.patch(
  '/edit-plans/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SubscriptionsPlanController.updateSubscriptionPlan,
);
router.delete(
  '/delete-free-plans/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SubscriptionsPlanController.deleteFreeUser,
);

export const SubscriptionPlanRoutes = router;
