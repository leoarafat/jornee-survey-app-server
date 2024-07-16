import { Types } from 'mongoose';
import { ITest } from '../test/test.interface';
import { IUser } from '../user/user.interface';
import { IDailyPrompts } from '../daily-promts/daily-promts.interface';

export type ITestUser = {
  test: Types.ObjectId | ITest;
  user: Types.ObjectId | IUser;
  prompts: Types.ObjectId | IDailyPrompts;
  score: number;
  scoreType: string;
  scoreResult: string;
  totalQuestion: number;
};
