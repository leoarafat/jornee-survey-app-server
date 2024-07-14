import ApiError from '../../../errors/ApiError';
import { ITest, ITestItem } from './test.interface';
import { Test, TestItem } from './test.model';

const createTest = async (payload: ITest) => {
  const isExistTest = await Test.findOne({ name: payload.name });
  if (isExistTest) {
    throw new ApiError(400, 'Test already exist');
  }
  return await Test.create(payload);
};
const createTestItem = async (payload: ITestItem) => {
  const isExistTest = await Test.findOne({ name: payload.test });
  if (!isExistTest) {
    throw new ApiError(404, 'Test not found');
  }
  const isExistTestItem = await TestItem.findOne({ item: payload.item });
  if (isExistTestItem) {
    throw new ApiError(400, `${payload.item} already exist`);
  }
  return await TestItem.create(payload);
};

export const TestService = {
  createTest,
  createTestItem,
};
