import express from 'express';
import { ManageRoutes } from '../modules/manage-web/manage.routes';
import { SubscriptionPlanRoutes } from '../modules/subscriptions-plan/subscriptions-plan.routes';
import { SubscriptionRoutes } from '../modules/subscriptions/subscriptions.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { NotificationRoutes } from '../modules/notifications/notifications.routes';
import { DashboardOverviewRoutes } from '../modules/overview/overview.routes';

import { FeedbackRoutes } from '../modules/feedback/feedback.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { DashboardRoutes } from '../modules/dashboard/dashboard.routes';

import { TestRoutes } from '../modules/test/test.routes';
import { TestUserRoutes } from '../modules/test-to-user/test-to-user.routes';
import { DailyPromptRoutes } from '../modules/daily-promts/daily-promts.routes';
import { FeelingRoutes } from '../modules/feelings/feelings.routes';
import { ResourceRoutes } from '../modules/resources/resources.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/manage',
    route: ManageRoutes,
  },
  {
    path: '/subscription-plan',
    route: SubscriptionPlanRoutes,
  },
  {
    path: '/subscriptions',
    route: SubscriptionRoutes,
  },

  {
    path: '/auth',
    route: AuthRoutes,
  },

  {
    path: '/notification',
    route: NotificationRoutes,
  },
  {
    path: '/overview',
    route: DashboardOverviewRoutes,
  },
  {
    path: '/notifications',
    route: FeedbackRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/dashboard',
    route: DashboardRoutes,
  },

  {
    path: '/test',
    route: TestRoutes,
  },
  {
    path: '/begin-test',
    route: TestUserRoutes,
  },
  {
    path: '/feelings',
    route: FeelingRoutes,
  },
  {
    path: '/daily-prompts',
    route: DailyPromptRoutes,
  },
  {
    path: '/resource',
    route: ResourceRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
