import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type ITest = {
  name: string;
};
export type ITestItem = {
  item: string;
  test: Types.ObjectId | ITest;
};
export type ITestResult = {
  test: Types.ObjectId | ITest;
  resultName: string;
  answer: string;
  user: Types.ObjectId | IUser;
};
