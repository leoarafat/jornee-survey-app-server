import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import sendResponse from '../../../shared/sendResponse';
import { DailyPromptsService } from './daily-promts.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DailyPromptsService.insertIntoDB(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Prompt created successfully',
    data: result,
  });
});

const myPromptsAnswer = catchAsync(async (req: Request, res: Response) => {
  const result = await DailyPromptsService.myPromptsAnswer(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Prompt retrieved successfully',
    data: result,
  });
});

export const DailyPromptsController = {
  insertIntoDB,
  myPromptsAnswer,
};
