import { model, Schema } from 'mongoose';
import { ITest, ITestItem } from './test.interface';

const testSchema = new Schema<ITest>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const testItemSchema = new Schema<ITestItem>(
  {
    item: {
      type: String,
      required: true,
    },
    test: {
      type: Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const journalizingPromptsItemSchema = new Schema<ITestItem>(
  {
    item: {
      type: String,
      required: true,
    },
    test: {
      type: Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Test = model('Test', testSchema);
export const TestItem = model('TestItem', testItemSchema);
export const JournalizingPrompt = model(
  'JournalizingPrompt',
  journalizingPromptsItemSchema,
);
