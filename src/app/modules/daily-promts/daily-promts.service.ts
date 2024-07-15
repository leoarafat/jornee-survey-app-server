import { Request } from 'express';
import { IReqUser } from '../user/user.interface';
import { IDailyPrompts } from './daily-promts.interface';
import ApiError from '../../../errors/ApiError';
import { DailyPrompts } from './daily-promts.model';

const insertIntoDB = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  const payload = req.body as IDailyPrompts;
  if (!payload.test || !payload.answer) {
    throw new ApiError(400, 'Test and Answer is required');
  }
  return await DailyPrompts.create({
    ...payload,
    user: userId,
  });
};
const myPromptsAnswer = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  const result = await DailyPrompts.findOne({ user: userId });
  if (!result) {
    return null;
  }
  return result;
};

export const DailyPromptsService = { insertIntoDB, myPromptsAnswer };
