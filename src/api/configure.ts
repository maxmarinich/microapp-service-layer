import { ConfigureOptions } from './types';

const defaultOptions = {
  apiUrl: process.env.MSL_API_URL || 'http://192.168.16.179',
};

export const configureApi = (options: Partial<ConfigureOptions> = {}) => {
  const { apiUrl } = options;

  if (apiUrl) {
    defaultOptions['apiUrl'] = apiUrl;
  }
};

export default defaultOptions;
