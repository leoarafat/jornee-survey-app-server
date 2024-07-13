import { Types } from 'mongoose';

export type ITest = {
  name: string;
};
export type ITestItem = {
  item: string;
  test: Types.ObjectId | ITest;
};
