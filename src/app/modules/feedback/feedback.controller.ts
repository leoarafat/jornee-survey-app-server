import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import { FeedBackService } from './feedback.service';
import sendResponse from '../../../shared/sendResponse';

const creteNotification = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedBackService.creteNotification(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully',
    data: result,
  });
});
const getNotification = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedBackService.getNotification();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'retrieved successfully',
    data: result,
  });
});
const addReplyToFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedBackService.addReplyToFeedback(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully',
    data: result,
  });
});

export const FeedbackController = {
  creteNotification,
  getNotification,
  addReplyToFeedback,
};
