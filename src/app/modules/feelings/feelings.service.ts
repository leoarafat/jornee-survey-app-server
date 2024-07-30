import { Request } from 'express';
import { IReqUser } from '../user/user.interface';
import { IFeelings } from './feelings.interface';
import ApiError from '../../../errors/ApiError';
import { Feelings } from './feelings.model';
import QueryBuilder from '../../../builder/QueryBuilder';

const createFeelingsLog = async (req: Request) => {
  const { userId } = req.user as IReqUser;
  const payload = req.body as IFeelings;
  if (!payload.emotions || !payload.feelings || !payload.needs) {
    throw new ApiError(400, 'Field are missing');
  }
  return await Feelings.create({
    ...payload,
    user: userId,
  });
};
//!
// const getEmotionPercentages = async () => {
//   try {
//     const totalCount = await Feelings.countDocuments();

//     const aggregationResult = await Feelings.aggregate([
//       {
//         $group: {
//           _id: '$emotions',
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $project: {
//           emotion: '$_id',
//           percentage: { $multiply: [{ $divide: ['$count', totalCount] }, 100] },
//           _id: 0,
//         },
//       },
//     ]);

//     const formattedResult = aggregationResult.map((item: any) => ({
//       emotion: item.emotion,
//       percentage: item.percentage.toFixed(2),
//     }));

//     return formattedResult;
//   } catch (error: any) {
//     console.error('Error calculating emotion percentages:', error.message);
//     throw new Error('Failed to retrieve emotion percentages');
//   }
// };
//!
const getEmotionPercentages = async () => {
  try {
    const totalCount = await Feelings.countDocuments();

    const aggregationResult = await Feelings.aggregate([
      {
        $unwind: '$emotions',
      },
      {
        $group: {
          _id: '$emotions',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          emotion: '$_id',
          percentage: { $multiply: [{ $divide: ['$count', totalCount] }, 100] },
          _id: 0,
        },
      },
    ]);

    const formattedResult = aggregationResult.map((item: any) => ({
      emotion: item.emotion,
      percentage: item.percentage.toFixed(2),
    }));

    return formattedResult;
  } catch (error: any) {
    console.error('Error calculating emotion percentages:', error.message);
    throw new Error('Failed to retrieve emotion percentages');
  }
};
const allUserReports = async (req: Request) => {
  const query = req.query;
  const feelingsQuery = new QueryBuilder(Feelings.find(), query).paginate();

  const totalCount = await feelingsQuery.countTotal();
  const result = await feelingsQuery.modelQuery;
  return {
    meta: totalCount,
    result,
  };
};
export const FeelingsService = {
  createFeelingsLog,
  getEmotionPercentages,
  allUserReports,
};
