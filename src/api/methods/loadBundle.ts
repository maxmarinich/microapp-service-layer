import client  from '../client';
import { ResponseType } from '../types';

export const loadBundle = (): Promise<string> => {
  return client({
    url: '/bundle',
    responseType: ResponseType.text,
  });
};
