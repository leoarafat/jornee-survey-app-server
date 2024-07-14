import httpStatus from 'http-status';
import { model, Schema } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import {
  ISubscriptionPlan,
  ISubscriptionPlanForUser,
  SubscriptionPlanModel,
} from './subscriptions-plan.interface';

const subscriptionPlanSchema = new Schema<ISubscriptionPlan>(
  {
    packageName: {
      type: String,

      required: true,
    },
    packagePrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);
const subscriptionPlanForUserSchema = new Schema<ISubscriptionPlanForUser>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
export const SubscriptionFreeUser = model(
  'SubscriptionFreeUser',
  subscriptionPlanForUserSchema,
);
