import Joi from 'joi';
import { CreateDataComment } from '../services/commentService.js';

export const commentSchema = Joi.object<CreateDataComment>({
  episodeId: Joi.number().required(),
  comment: Joi.string().required()
});