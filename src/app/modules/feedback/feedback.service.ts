/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request } from 'express';
import { FeedBack, FeedBackDescription } from './feedback.model';
import ApiError from '../../../errors/ApiError';

const creteNotification = async (req: Request) => {
  const payload = req.body;

  return await FeedBack.create(payload);
};
const getNotification = async () => {
  return await FeedBack.find({});
};
const addReplyToFeedback = async (req: Request) => {
  const { description, id } = req.body;

  const feedback = await FeedBack.findById(id);

  if (!feedback) {
    throw new ApiError(404, 'Notification not found');
  }

  return await FeedBackDescription.create({
    feedback: id,
    description,
  });
};

export const FeedBackService = {
  creteNotification,
  getNotification,
  addReplyToFeedback,
};
