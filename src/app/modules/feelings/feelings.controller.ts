import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import sendResponse from '../../../shared/sendResponse';
import { FeelingsService } from './feelings.service';

const createFeelingsLog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeelingsService.createFeelingsLog(req);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Feelings create successfully`,
      data: result,
    });
  },
);
const getEmotionPercentages: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeelingsService.getEmotionPercentages();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Feeling Retried successfully`,
      data: result,
    });
  },
);
const allUserReports: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeelingsService.allUserReports(req);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Feeling Retried successfully`,
      data: result,
    });
  },
);
const myFeelings: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeelingsService.myFeelings(req);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Retried successfully`,
      data: result,
    });
  },
);
const deleteFeelings: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeelingsService.deleteFeelings(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Delete successfully`,
      data: result,
    });
  },
);

export const FeelingsController = {
  createFeelingsLog,
  getEmotionPercentages,
  allUserReports,
  myFeelings,
  deleteFeelings,
};
