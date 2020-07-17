import fetch from 'cross-fetch';

import { microappApiUrl } from '../constants';
import { InstanceOptions } from './types';

const headersBase = { 'Content-Type': 'application/json' };

function apiInstance(instanceOptions: InstanceOptions) {
  const { url, params, headers, responseType, method = 'GET', ...restOptions } = instanceOptions;

  const endpoint = `${microappApiUrl}${url}`;

  const options: RequestInit = {
    ...restOptions,
    headers: {
      ...headersBase,
      ...headers,
    },
    method: method.toUpperCase(),
  };

  if (params) {
    options.body = JSON.stringify(params);
  }

  return fetch(endpoint, options).then((response) => {
    if (response.ok) {
      return responseType ? response[responseType]() : response.json();
    }
    throw new Error(`${response.status}`);
  });
}

export default apiInstance;
