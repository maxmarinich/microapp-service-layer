import { ConfigureOptions } from './types';

const defaultOptions = {
  apiUrl:
    process.env.MSL_API_URL ||
    process.env.VUE_APP_MSL_API_URL ||
    'https://marketing-web.common.dev.leoncorp.net',
};

export const configureApi = (options: Partial<ConfigureOptions> = {}) => {
  const { apiUrl } = options;

  if (apiUrl) {
    defaultOptions['apiUrl'] = apiUrl;
  }
};

export default defaultOptions;
