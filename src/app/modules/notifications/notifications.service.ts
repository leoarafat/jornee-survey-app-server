import Notification from './notifications.model';
import QueryBuilder from '../../../builder/QueryBuilder';
import { INotification } from './notifications.interface';
import ApiError from '../../../errors/ApiError';

const createNotification = async (payload: INotification) => {
  if (!payload.title || payload.description) {
    throw new ApiError(400, 'All field are required');
  }
  return await Notification.create(payload);
};
const getNotifications = async (query: Record<string, unknown>) => {
  const notificationQuery = new QueryBuilder(Notification.find({}), query)
    .search(['title'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await notificationQuery.modelQuery;
  const meta = await notificationQuery.countTotal();

  const unreadNotification = await Notification.countDocuments({
    status: false,
  });
  const readNotification = await Notification.countDocuments({ status: true });

  return {
    unreadNotification,
    readNotification,
    meta,
    data: result,
  };
};

export const NotificationService = {
  getNotifications,
  createNotification,
};
