import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import { ResourceService } from './resources.service';
import sendResponse from '../../../shared/sendResponse';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ResourceService.insertIntoDB(req as any);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Success',
    data: result,
  });
});
const getResource = catchAsync(async (req: Request, res: Response) => {
  const result = await ResourceService.getResource();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Success',
    data: result,
  });
});
const deleteResource = catchAsync(async (req: Request, res: Response) => {
  const result = await ResourceService.deleteResource(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Success',
    data: result,
  });
});

export const ResourceController = {
  insertIntoDB,
  getResource,
  deleteResource,
};
