import instance from '../instance';

export type Template = {
  html: string;
  state: string;
  styles: string;
};

export const loadTemplate = (params = { path: '' }): Promise<Template> => {
  return instance({
    url: '/template',
    method: 'POST',
    params,
  });
};
