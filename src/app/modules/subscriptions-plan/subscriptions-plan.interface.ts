import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IPackageDetails = { title: string; status: boolean };

export type ISubscriptionPlan = {
  packageName: string;
  packagePrice: number;
};
export type ISubscriptionPlanForUser = {
  user: Types.ObjectId | IUser;
};

export type SubscriptionPlanModel = Model<
  ISubscriptionPlan,
  Record<string, unknown>
>;
