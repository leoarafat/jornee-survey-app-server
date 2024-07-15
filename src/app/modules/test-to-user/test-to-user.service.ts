import { Request } from 'express';
import ApiError from '../../../errors/ApiError';
import { IReqUser } from '../user/user.interface';
import { ITestUser } from './test-to-user.interface';
import { TestUser } from './test-to-user.model';

const createUserTest = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  const payload = req.body as ITestUser;
  if (
    !payload.score ||
    !payload.scoreType ||
    !payload.test ||
    payload.totalQuestion
  ) {
    throw new ApiError(400, 'All field are required');
  }
  return await TestUser.create({
    ...payload,
    user: userId,
  });
};

const getTestUser = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  return await TestUser.find({ user: userId });
};

export const TestUserService = {
  createUserTest,
  getTestUser,
};
