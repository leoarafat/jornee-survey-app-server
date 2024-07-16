import { CustomRequest } from '../../../interfaces/common';
import { Test } from '../test/test.model';
import { IResource } from './resources.interface';
import ApiError from '../../../errors/ApiError';
import ResourceModel from './resources.model';
import { Request } from 'express';

const insertIntoDB = async (req: CustomRequest) => {
  const { files } = req;
  const payload = req.body as unknown as IResource;
  const isExistTest = await Test.findById(payload.test);
  if (!isExistTest) {
    throw new ApiError(404, 'Test not exist');
  }
  let pdf = undefined;

  if (files && files.pdf) {
    pdf = `pdf/${files.pdf[0].filename}`;
  }
  return await ResourceModel.create({
    pdfFile: pdf,
    test: payload.test,
  });
};
const getResource = async () => {
  return await ResourceModel.find();
};
const deleteResource = async (req: Request) => {
  const { id } = req.params;
  const isExist = await ResourceModel.findById(id);
  if (isExist) {
    return await ResourceModel.findByIdAndDelete(id);
  }
};
export const ResourceService = {
  insertIntoDB,
  getResource,
  deleteResource,
};
