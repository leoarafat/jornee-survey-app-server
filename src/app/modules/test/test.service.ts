import { Request } from 'express';
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
const getTest = async () => {
  return await Test.find({});
};
const getTestItem = async (id: string) => {
  return await TestItem.find({ test: id });
};
const updateTest = async (req: Request) => {
  const { id } = req.params;
  const data = req.body;
  const isExist = await Test.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'Test not found');
  }
  return await Test.findByIdAndUpdate(
    id,
    { ...data },
    { new: true, runValidators: true },
  );
};
const updateTestItem = async (req: Request) => {
  const { id } = req.params;
  const data = req.body;
  const isExist = await TestItem.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'TestItem not found');
  }
  return await TestItem.findByIdAndUpdate(
    id,
    { ...data },
    { new: true, runValidators: true },
  );
};
const deleteTest = async (req: Request) => {
  const { id } = req.params;
  const isExist = await Test.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'Test not found');
  }
  return await Test.findByIdAndDelete(id);
};
const deleteTestItem = async (req: Request) => {
  const { id } = req.params;
  const isExist = await TestItem.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'TestItem not found');
  }
  return await TestItem.findByIdAndDelete(id);
};
export const TestService = {
  createTest,
  createTestItem,
  getTest,
  getTestItem,
  updateTest,
  updateTestItem,
  deleteTest,
  deleteTestItem,
};
