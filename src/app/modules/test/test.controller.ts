import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import sendResponse from '../../../shared/sendResponse';
import { TestService } from './test.service';

const createTest = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.createTest(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test created successfully',
    data: result,
  });
});
const createTestItem = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.createTestItem(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test item created successfully',
    data: result,
  });
});

const getTests = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.getTest();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test retrieved successfully',
    data: result,
  });
});
const getTestItems = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.getTestItem(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test item retrieved successfully',
    data: result,
  });
});

export const TestController = {
  createTest,
  createTestItem,
  getTests,
  getTestItems,
};
