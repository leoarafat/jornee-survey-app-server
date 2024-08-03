import { Request } from 'express';
import ApiError from '../../../errors/ApiError';
import { IReqUser } from '../user/user.interface';
import { ITestUser } from './test-to-user.interface';
import { TestUser } from './test-to-user.model';
import mongoose from 'mongoose';
import { TestItem } from '../test/test.model';

const createUserTest = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  const payload = req.body as ITestUser;
  if (!payload.score || !payload.test) {
    throw new ApiError(400, 'All field are required');
  }
  return await TestUser.create({
    ...payload,
    user: userId,
  });
};
const getTestDetails = async (id: string) => {
  const result = await TestItem.find({ test: id });
  return result.map(item => item.item);
};
const averageTestPercentage = async () => {
  try {
    const totalDocuments = await TestUser.countDocuments();

    const results = await TestUser.aggregate([
      {
        $group: {
          _id: '$test',
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: 'tests',
          localField: '_id',
          foreignField: '_id',
          as: 'testDetails',
        },
      },
      {
        $unwind: '$testDetails',
      },
      {
        $project: {
          _id: 1,
          count: 1,
          percentage: {
            $multiply: [{ $divide: ['$count', totalDocuments] }, 100],
          },
          testName: '$testDetails.name',
        },
      },
    ]);

    return results;
  } catch (error) {
    console.error('Error calculating test distribution percentage:', error);
    throw new Error('Failed to calculate test distribution percentage');
  }
};
const getScoreTypeDistributionByTestId = async (req: Request) => {
  const { id } = req.params;

  try {
    const totalDocuments = await TestUser.countDocuments({ test: id });

    if (totalDocuments === 0) {
      return {
        statusCode: 404,
        success: false,
        message: 'No documents found for the specified test ID',
      };
    }

    const results = await TestUser.aggregate([
      { $match: { test: new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: '$scoreType',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 1,
          count: 1,
          percentage: {
            $multiply: [{ $divide: ['$count', totalDocuments] }, 100],
          },
        },
      },
    ]);

    return results;
  } catch (error) {
    console.error('Error calculating score type distribution:', error);
  }
};
const getTestUser = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  return await TestUser.find({ user: userId });
};

export const TestUserService = {
  createUserTest,
  getTestUser,
  averageTestPercentage,
  getScoreTypeDistributionByTestId,
  getTestDetails,
};
