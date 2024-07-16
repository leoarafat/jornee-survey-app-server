import { Subscription } from '../subscriptions/subscriptions.model';
import { TestUser } from '../test-to-user/test-to-user.model';

import User from '../user/user.model';
const totalCount = async () => {
  const users = await User.countDocuments();
  const totalTest = await TestUser.countDocuments();
  const totalSubscriptions = await Subscription.countDocuments();

  //! Total earnings
  const totalEarnings = await Subscription.aggregate([
    {
      $group: {
        _id: null,
        totalAmount: { $sum: { $toDouble: '$amount' } },
      },
    },
  ]);

  const total = totalEarnings.length > 0 ? totalEarnings[0].totalAmount : 0;

  //! todays test count
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);

  const todaysTestCount = await TestUser.countDocuments({
    createdAt: {
      $gte: startOfDay,
      $lt: endOfDay,
    },
  });

  //! Last Seven Days Income
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const today = new Date();
  today.setUTCHours(23, 59, 59, 999);

  const last7DaysSubscriptionCount = await Subscription.countDocuments({
    createdAt: {
      $gte: sevenDaysAgo,
      $lt: today,
    },
  });

  //!Todays income
  const todaysEarnings = await Subscription.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfDay,
          $lt: endOfDay,
        },
        payment_status: 'paid',
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: { $toDouble: '$amount' } },
      },
    },
  ]);

  const todaysEarning =
    todaysEarnings.length > 0 ? todaysEarnings[0].totalAmount : 0;

  //!Monthly Income
  const startOfMonth = new Date();
  startOfMonth.setUTCDate(1);
  startOfMonth.setUTCHours(0, 0, 0, 0);

  const endOfMonth = new Date(startOfMonth);
  endOfMonth.setUTCMonth(startOfMonth.getUTCMonth() + 1);
  endOfMonth.setUTCDate(0);
  endOfMonth.setUTCHours(23, 59, 59, 999);

  const monthlyEarnings = await Subscription.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfMonth,
          $lt: endOfMonth,
        },
        payment_status: 'paid',
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: { $toDouble: '$amount' } },
      },
    },
  ]);

  const totalMonthlyIncome =
    monthlyEarnings.length > 0 ? monthlyEarnings[0].totalAmount : 0;
  return {
    users,
    totalTest,
    totalSubscriptions,
    totalEarnings: total,
    todaysTestCount,
    newSubscribers: last7DaysSubscriptionCount,
    todaysEarning,
    totalMonthlyIncome,
  };
};

const getLast12MonthsEarningsOverview = async (): Promise<any> => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const startOfYear = new Date(Date.UTC(currentYear, 0, 1));
  const endOfYear = new Date(Date.UTC(currentYear, 11, 31, 23, 59, 59));

  const earningsOverview = await Subscription.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startOfYear,
          $lte: endOfYear,
        },
        payment_status: 'paid',
      },
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
        },
        totalAmount: { $sum: { $toDouble: '$amount' } },
      },
    },
    {
      $sort: {
        '_id.year': 1,
        '_id.month': 1,
      },
    },
  ]);

  const formattedEarningsOverview = [];
  for (let i = 0; i < 12; i++) {
    const monthIndex = i;
    const matchingMonth = earningsOverview.find(
      e => e._id.year === currentYear && e._id.month === monthIndex + 1,
    );
    formattedEarningsOverview.push({
      year: currentYear,
      month: monthNames[monthIndex],
      totalAmount: matchingMonth ? matchingMonth.totalAmount : 0,
    });
  }
  return formattedEarningsOverview;
};
const monthNames = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const DashboardService = {
  totalCount,
  getLast12MonthsEarningsOverview,
};
