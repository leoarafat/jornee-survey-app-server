import { Request } from 'express';
import ApiError from '../../../errors/ApiError';
import { ITest, ITestItem, ITestResult } from './test.interface';
import { JournalizingPrompt, Test, TestItem, TestResult } from './test.model';
import { asyncForEach } from '../../../utils/asyncForEach';
import { JwtPayload } from 'jsonwebtoken';

const createTest = async (payload: ITest) => {
  const isExistTest = await Test.findOne({ name: payload.name });
  if (isExistTest) {
    throw new ApiError(400, 'Test already exist');
  }
  return await Test.create(payload);
};
const createTestItem = async (payload: ITestItem) => {
  const isExistTest = await Test.findOne({ _id: payload.test });
  if (!isExistTest) {
    throw new ApiError(404, 'Test not found');
  }
  const isExistTestItem = await TestItem.findOne({ item: payload.item });
  if (isExistTestItem) {
    throw new ApiError(400, `${payload.item} already exist`);
  }
  return await TestItem.create(payload);
};
const addTestResult = async (user: JwtPayload, payload: ITestResult) => {
  return await TestResult.create(payload);
};
const createMultiplePrompts = async (payload: any) => {
  const { items } = payload;

  await asyncForEach(items, async (item: any) => {
    return await JournalizingPrompt.create({ item });
  });
};
const createJournalizingPrompt = async (payload: ITestItem) => {
  // const isExistTest = await Test.findOne({ _id: payload.test });
  // if (!isExistTest) {
  //   throw new ApiError(404, 'Test not found');
  // }
  const isExistTestItem = await JournalizingPrompt.findOne({
    item: payload.item,
  });
  if (isExistTestItem) {
    throw new ApiError(400, `${payload.item} already exist`);
  }
  return await JournalizingPrompt.create(payload);
};
const getTest = async () => {
  return await Test.find({});
};
const getTestItem = async (id: string) => {
  return await TestItem.find({ test: id });
};
const getJournalizingPrompt = async (id: string) => {
  return await JournalizingPrompt.find({ test: id });
};
const getAllJournalizingPrompt = async () => {
  return await JournalizingPrompt.find();
};
const sufflePromts = async () => {
  const allPrompts = await JournalizingPrompt.find().select('-test');
  const randomIndex = Math.floor(Math.random() * allPrompts.length);
  return allPrompts[randomIndex];
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
const updateJournalizingPrompt = async (req: Request) => {
  const { id } = req.params;
  const data = req.body;
  const isExist = await JournalizingPrompt.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'JournalizingPrompt not found');
  }
  return await JournalizingPrompt.findByIdAndUpdate(
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
const deleteJournalizingPrompt = async (req: Request) => {
  const { id } = req.params;
  const isExist = await JournalizingPrompt.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'JournalizingPrompt not found');
  }
  return await JournalizingPrompt.findByIdAndDelete(id);
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
  createJournalizingPrompt,
  getJournalizingPrompt,
  updateJournalizingPrompt,
  deleteJournalizingPrompt,
  createMultiplePrompts,
  getAllJournalizingPrompt,
  addTestResult,
  sufflePromts,
};
