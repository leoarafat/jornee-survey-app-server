import { Types } from 'mongoose';
import { ITest } from '../test/test.interface';

export type IResource = {
  test: Types.ObjectId | ITest;
  pdfFile: string;
};
