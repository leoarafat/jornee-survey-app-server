import { model, Schema } from 'mongoose';
import { ITestUser } from './test-to-user.interface';

const testUserSchema = new Schema<ITestUser>(
  {
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
    score: {
      type: Number,
      required: true,
    },
    totalQuestion: {
      type: Number,
      // required: true,
    },
    scoreType: {
      type: String,
      // required: true,
    },
    scoreResult: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TestUser = model('TestUser', testUserSchema);
