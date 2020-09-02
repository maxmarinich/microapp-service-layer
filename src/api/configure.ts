import { ConfigureOptions } from './types';

const defaultOptions = {
  apiUrl: process.env.MSL_API_URL || 'http://localhost:5000',
};

export const configureApi = (options: Partial<ConfigureOptions> = {}) => {
  const { apiUrl } = options;

  if (apiUrl) {
    defaultOptions['apiUrl'] = apiUrl;
  }
};

export default defaultOptions;
