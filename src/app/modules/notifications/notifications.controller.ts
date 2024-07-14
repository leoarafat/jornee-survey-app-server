import { Request, RequestHandler, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchasync';
import { NotificationService } from './notifications.service';

const createNotifications: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await NotificationService.createNotification(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Notification create successfully`,
      data: result,
    });
  },
);
const getNotifications: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await NotificationService.getNotifications(req.query);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Notification retrieved successfully`,
      data: result,
    });
  },
);

export const NotificationController = {
  getNotifications,
  createNotifications,
};
