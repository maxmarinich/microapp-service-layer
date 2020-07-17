import instance  from '../instance';
import { ResponseType } from '../types';

export const loadBundle = (): Promise<string> => {
  return instance({
    url: '/bundle',
    responseType: ResponseType.text,
  });
};
