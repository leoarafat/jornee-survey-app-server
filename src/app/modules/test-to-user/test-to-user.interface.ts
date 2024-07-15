import { Types } from 'mongoose';
import { ITest } from '../test/test.interface';
import { IUser } from '../user/user.interface';

export type ITestUser = {
  test: Types.ObjectId | ITest;
  user: Types.ObjectId | IUser;
  score: number;
  scoreType: string;
  totalQuestion: number;
};
