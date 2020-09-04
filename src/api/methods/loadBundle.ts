import client  from '../client';
import { ResponseType } from '../types';

export const loadBundle = (): Promise<string> => {
  return client({
    url: '/microapp.js',
    responseType: ResponseType.text,
  });
};
