import mongoose, { Model, Schema } from 'mongoose';
import { INotification } from './notifications.interface';

const notificationSchema = new Schema<INotification>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Notification: Model<INotification> = mongoose.model(
  'Notification',
  notificationSchema,
);

export default Notification;
