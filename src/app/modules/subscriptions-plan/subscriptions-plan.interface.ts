import { Model } from 'mongoose';

export type IPackageDetails = { title: string; status: boolean };

export type ISubscriptionPlan = {
  packageName: string;
  packagePrice: number;
};

export type SubscriptionPlanModel = Model<
  ISubscriptionPlan,
  Record<string, unknown>
>;
