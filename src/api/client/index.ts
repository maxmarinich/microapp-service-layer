import fetch from 'cross-fetch';

import defaultOptions from '../configure';
import { ClientOptions } from '../types';

const headersBase = { 'Content-Type': 'application/json' };

export default function client(clientOptions: ClientOptions) {
  const { url, params, headers, responseType, method = 'GET', ...restOptions } = clientOptions;

  const endpoint = `${defaultOptions.apiUrl}${url}`;

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
