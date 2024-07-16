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
const createJournalizingPrompt = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.createJournalizingPrompt(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'created successfully',
      data: result,
    });
  },
);
const createMultiplePrompts = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.createMultiplePrompts(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'created successfully',
      data: result,
    });
  },
);

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
const getJournalizingPrompt = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.getJournalizingPrompt(req.params.id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved successfully',
      data: result,
    });
  },
);
const getAllJournalizingPrompt = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.getAllJournalizingPrompt();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved successfully',
      data: result,
    });
  },
);
const updateTest = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.updateTest(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test update successfully',
    data: result,
  });
});
const updateTestItem = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.updateTestItem(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test item update successfully',
    data: result,
  });
});
const updateJournalizingPrompt = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.updateJournalizingPrompt(req);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'update successfully',
      data: result,
    });
  },
);
const deleteTest = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.deleteTest(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test delete successfully',
    data: result,
  });
});
const deleteTestItem = catchAsync(async (req: Request, res: Response) => {
  const result = await TestService.deleteTestItem(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Test item delete successfully',
    data: result,
  });
});

const deleteJournalizingPrompt = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TestService.deleteJournalizingPrompt(req);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Test item delete successfully',
      data: result,
    });
  },
);

export const TestController = {
  createTest,
  createTestItem,
  getTests,
  getTestItems,
  updateTest,
  updateTestItem,
  deleteTest,
  deleteTestItem,
  createJournalizingPrompt,
  getJournalizingPrompt,
  updateJournalizingPrompt,
  deleteJournalizingPrompt,
  createMultiplePrompts,
  getAllJournalizingPrompt,
};
