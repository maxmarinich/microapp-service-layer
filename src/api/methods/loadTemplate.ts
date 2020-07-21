import client from '../client';
import { Template, CreateTemplateOptions } from '../../types';

export const loadTemplate = (params: CreateTemplateOptions): Promise<Template> => {
  return client({
    url: '/template',
    method: 'POST',
    params,
  });
};
