import httpStatus from 'http-status';
import { model, Schema } from 'mongoose';
import { packageName } from '../../../constants/subscription.name';
import ApiError from '../../../errors/ApiError';
import {
  ISubscriptionPlan,
  SubscriptionPlanModel,
} from './subscriptions-plan.interface';

const subscriptionPlanSchema = new Schema<ISubscriptionPlan>(
  {
    packageName: {
      type: String,
      enum: packageName,
      required: true,
    },
    packagePrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

subscriptionPlanSchema.pre('save', async function (next) {
  const isExist = await SubscriptionPlan.findOne({
    packageName: this.packageName,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Subscription plan already exist!',
    );
  }
  next();
});

export const SubscriptionPlan = model<ISubscriptionPlan, SubscriptionPlanModel>(
  'SubscriptionPlan',
  subscriptionPlanSchema,
);
