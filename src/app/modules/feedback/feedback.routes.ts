import express from 'express';
import { FeedbackController } from './feedback.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();
router.post(
  '/create',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FeedbackController.creteNotification,
);
router.get(
  '/all',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeedbackController.getNotification,
);
router.post(
  '/send',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FeedbackController.addReplyToFeedback,
);
export const FeedbackRoutes = router;
