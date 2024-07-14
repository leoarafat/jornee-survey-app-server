import { z } from 'zod';
import { packageName } from '../../../constants/subscription.name';

const CreateSubscriptionPlanZodSchema = z.object({
  body: z.object({
    packageName: z.enum([...packageName] as [string, ...string[]], {
      required_error: 'Package name is required',
    }),
    packagePrice: z.number({ required_error: 'Package Price is required' }),
  }),
});

const updateSubscriptionPlanZodSchema = z.object({
  body: z.object({
    packageName: z.enum([...packageName] as [string, ...string[]]).optional(),
    packagePrice: z.number().optional(),
  }),
});

export const SubscriptionPlanValidation = {
  CreateSubscriptionPlanZodSchema,
  updateSubscriptionPlanZodSchema,
};
