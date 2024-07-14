/* eslint-disable @typescript-eslint/ban-ts-comment */
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  ISubscriptionPlan,
  ISubscriptionPlanForUser,
} from './subscriptions-plan.interface';
import {
  SubscriptionFreeUser,
  SubscriptionPlan,
} from './subscriptions-plan.model';

const createSubscriptionPlanToDB = async (payload: ISubscriptionPlan) => {
  const result = await SubscriptionPlan.create(payload);
  return result;
};
const createSubscriptionFreeUserToDB = async (
  payload: ISubscriptionPlanForUser,
) => {
  const result = await SubscriptionFreeUser.create(payload);
  return result;
};
const deleteFreeUser = async (id: string) => {
  const isExist = await SubscriptionFreeUser.findById(id);
  if (!isExist) {
    throw new ApiError(404, 'Not found');
  }
  return await SubscriptionFreeUser.findByIdAndDelete(id);
};
const getAllSubscriptionPlanFromDB = async () => {
  const result = await SubscriptionPlan.find();
  return result;
};
const getAllFreeUser = async () => {
  const result = await SubscriptionFreeUser.find();
  return result;
};

const updateSubscriptionPlanToDB = async (
  id: string,
  payload: ISubscriptionPlan,
) => {
  const isExistPlan = await SubscriptionPlan.findById(id);
  if (!isExistPlan) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Subscription plan doesn't exist!",
    );
  }
  const result = await SubscriptionPlan.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const SubscriptionsPlanService = {
  createSubscriptionPlanToDB,
  getAllSubscriptionPlanFromDB,
  updateSubscriptionPlanToDB,
  createSubscriptionFreeUserToDB,
  deleteFreeUser,
  getAllFreeUser,
};
