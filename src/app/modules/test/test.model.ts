import { model, Schema } from 'mongoose';
import { ITest, ITestItem, ITestResult } from './test.interface';

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
    // test: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Test',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  },
);
const testResultSchema = new Schema<ITestResult>(
  {
    resultName: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    test: {
      type: Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Test = model('Test', testSchema);
export const TestItem = model('TestItem', testItemSchema);
export const TestResult = model('TestResult', testResultSchema);
export const JournalizingPrompt = model(
  'JournalizingPrompt',
  journalizingPromptsItemSchema,
);
