export type InstanceOptions = {
  url: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
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

