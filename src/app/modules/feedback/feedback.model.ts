import mongoose, { model, Schema } from 'mongoose';

const notificationDescription = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: 'FeedBack',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const feedbackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const FeedBack = model('FeedBack', feedbackSchema);
export const FeedBackDescription = model(
  'FeedBackDescription',
  notificationDescription,
);
