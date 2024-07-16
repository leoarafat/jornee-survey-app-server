import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import { DashboardService } from './dashboard.service';
import sendResponse from '../../../shared/sendResponse';

const totalCount = catchAsync(async (req: Request, res: Response) => {
  const result = await DashboardService.totalCount();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Data retrieved successful',
    data: result,
  });
});
const getLast12MonthsEarningsOverview = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DashboardService.getLast12MonthsEarningsOverview();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Data retrieved successful',
      data: result,
    });
  },
);

export const DashboardController = {
  totalCount,
  getLast12MonthsEarningsOverview,
};
