import { Types } from 'mongoose';
import { ITest } from '../test/test.interface';
import { IUser } from '../user/user.interface';

export type IDailyPrompts = {
  test: Types.ObjectId | ITest;
  user: Types.ObjectId | IUser;
  question: string;
  answer: string;
};
