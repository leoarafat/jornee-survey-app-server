import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import sendResponse from '../../../shared/sendResponse';
import { TestUserService } from './test-to-user.service';

const createUserTest = catchAsync(async (req: Request, res: Response) => {
  const result = await TestUserService.createUserTest(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test created successfully',
    data: result,
  });
});

const getTestUser = catchAsync(async (req: Request, res: Response) => {
  const result = await TestUserService.getTestUser(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test retrieved successfully',
    data: result,
  });
});

export const TestUserController = {
  createUserTest,
  getTestUser,
};
