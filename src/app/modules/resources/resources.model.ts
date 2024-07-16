import { model, Schema } from 'mongoose';
import { IResource } from './resources.interface';

const ResourceSchema = new Schema<IResource>({
  test: {
    type: Schema.Types.ObjectId,
    ref: 'Test',
    required: true,
  },
  pdfFile: {
    type: String,
    required: true,
  },
});

const ResourceModel = model<IResource>('Resource', ResourceSchema);

export default ResourceModel;
