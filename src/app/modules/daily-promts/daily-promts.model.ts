import { model, Schema } from 'mongoose';
import { IDailyPrompts } from './daily-promts.interface';

const dailyPromptsSchema = new Schema<IDailyPrompts>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  test: {
    type: Schema.Types.ObjectId,
    ref: 'Test',
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const DailyPrompts = model('DailyPrompts', dailyPromptsSchema);
