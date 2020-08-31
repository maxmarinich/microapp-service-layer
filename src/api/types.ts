export type ClientOptions = {
  url: string;
  params?: Record<string, any>;
  responseType?: ResponseType;
} & RequestInit;

export enum ResponseType {
  text = 'text',
  json = 'json',
  blob = 'blob',
  formData = 'formData',
  arrayBuffer = 'arrayBuffer',
}

export type ConfigureOptions = {
  apiUrl: string;
}

