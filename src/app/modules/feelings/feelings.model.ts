import { model, Schema } from 'mongoose';
import { IFeelings } from './feelings.interface';

const feelingsSchema = new Schema<IFeelings>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    emotions: {
      type: String,
      enum: [
        'joy',
        'trust',
        'anger',
        'anticipation',
        'fear',
        'surprise',
        'disgust',
        'sadness',
        'something else',
      ],
      required: true,
    },
    feelings: {
      type: String,
      required: true,
    },
    needs: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Feelings = model<IFeelings>('Feelings', feelingsSchema);
