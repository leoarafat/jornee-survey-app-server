import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IFeelings = {
  user: Types.ObjectId | IUser;
  emotions: (
    | 'joy'
    | 'trust'
    | 'anger'
    | 'anticipation'
    | 'fear'
    | 'surprise'
    | 'disgust'
    | 'sadness'
    | 'something else'
  )[];
  feelings: string;
  needs: string;
};
